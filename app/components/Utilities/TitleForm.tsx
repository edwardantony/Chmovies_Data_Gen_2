"use client";
import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { Select, MenuItem, SelectChangeEvent, TextField } from "@mui/material";
import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";
import MultiSelectInput from "./MultiSelectInput";
import MultiTagInput from "./MultiTagInput";
import MultiInputMaker from "./MultiInputMaker";
import MultiRentalInputMaker from "./MultiRentalInputMaker";
import dayjs, { Dayjs } from "dayjs";
import { Toaster, toast } from "react-hot-toast"; // Import Toaster and toast

interface TitleFormProps {
  onFormDataUpdate: (formData: FormData) => void; // Callback to send formData to parent
  onValidationError: (errors: { [key: string]: string }) => void; // Callback to send validation errors to parent
}

interface MediaEntry {
  language: string;
  labelInput: string;
  textInput: string;
  file: File | null;
}

interface RentalEntry {
  type: string;
  price: string;
  currency: string;
}

const TitleForm = forwardRef(({ onFormDataUpdate, onValidationError }: TitleFormProps, ref) => {
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>("");
  const [featured, setFeatured] = useState(false);
  const [contentType, setContentType] = useState<string>("");
  const [contentStatus, setContentStatus] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
  const [duration, setDuration] = useState<Dayjs | null>(dayjs().startOf("day").add(2, "hour"));
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedSubtitles, setSelectedSubtitles] = useState<MediaEntry[]>([]);
  const [selectedAudioTracks, setSelectedAudioTracks] = useState<MediaEntry[]>([]);
  const [selectedVODPlans, setSelectedVODPlans] = useState<string[]>([]);
  const [selectedRentalPlans, setSelectedRentalPlans] = useState<RentalEntry[]>([]);

  // Use useEffect to propagate form data updates to the parent
  useEffect(() => {
    const formData: FormData = {
      title,
      description,
      releaseDate: selectedDate ? selectedDate.format("YYYY-MM-DD") : "",
      duration: duration ? duration.hour() * 3600 + duration.minute() * 60 + duration.second() : "",
      status: contentStatus,
      type: contentType,
      categories: selectedCategories,
      genres: selectedGenres,
      countries: selectedCountries,
      subtitles: selectedSubtitles,
      audioTracks: selectedAudioTracks,
      vodPlans: selectedVODPlans,
      rentalPlans: selectedRentalPlans,
    };
    onFormDataUpdate(formData);
  }, [
    title,
    description,
    selectedDate,
    duration,
    contentStatus,
    contentType,
    selectedCategories,
    selectedGenres,
    selectedCountries,
    selectedSubtitles,
    selectedAudioTracks,
    selectedVODPlans,
    selectedRentalPlans,
  ]);

  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    if (!title) {
      errors.title = "Title is required";
    }
    if (!description) {
      errors.description = "Description is required";
    }
    if (!contentType) {
      errors.type = "Content type is required";
    }
    if (!contentStatus) {
      errors.status = "Status is required";
    }
    if (!selectedDate) {
      errors.releaseDate = "Release date is required";
    }
    if (!duration) {
      errors.duration = "Duration is required";
    }
    if (selectedCategories.length === 0) {
      errors.categories = "At least one category is required";
    }
    if (selectedGenres.length === 0) {
      errors.genres = "At least one genre is required";
    }
    if (selectedVODPlans.length === 0) {
      errors.vodPlans = "At least one VOD Plan is required";
    }

    onValidationError(errors); // Send errors to parent component
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  useImperativeHandle(ref, () => ({
    validateForm,
  }));

  // Event handlers (no direct calls to onFormDataUpdate)
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const lines = event.target.value.split(/\r?\n/);
    const formattedDescription = lines
      .filter((line) => line.trim() !== "")
      .map((line) => `<p>${line}</p>`)
      .join("");
    setDescription(formattedDescription);
  };

  const handleFeaturedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFeatured(event.target.checked);
  };

  const handleDateChange = (date: Dayjs | null) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (value: Dayjs | null) => {
    setDuration(value);
  };

  const handleCategoryChange = (categories: string[]) => {
    setSelectedCategories(categories);
  };

  const handleGenreChange = (genres: string[]) => {
    setSelectedGenres(genres);
  };

  const handleCountryChange = (countries: string[]) => {
    setSelectedCountries(countries);
  };

  const handleStatusChange = (event: SelectChangeEvent) => {
    setContentStatus(event.target.value);
  };

  const handleTypeChange = (event: SelectChangeEvent) => {
    setContentType(event.target.value);
  };

  const handleSubtitlesChange = (subtitles: MediaEntry[] | ((prev: MediaEntry[]) => MediaEntry[])) => {
    setSelectedSubtitles((prev) => (typeof subtitles === "function" ? subtitles(prev) : subtitles));
  };

  const handleAudioTracksChange = (audioTracks: MediaEntry[] | ((prev: MediaEntry[]) => MediaEntry[])) => {
    setSelectedAudioTracks((prev) => (typeof audioTracks === "function" ? audioTracks(prev) : audioTracks));
  };

  const handleVODChange = (plans: string[]) => {
    setSelectedVODPlans(plans);
  };

  const handleRentType = (action: "add" | "remove", pack?: RentalEntry, index?: number) => {
    setSelectedRentalPlans((prev) => {
      if (action === "add" && pack) {
        return [...prev, pack];
      } else if (action === "remove" && index !== undefined) {
        return prev.filter((_, i) => i !== index);
      }
      return prev;
    });
  };

  const countryLabels = {
    IN: "India",
    US: "United States",
    UK: "United Kingdom",
    CA: "Canada",
    AU: "Australia",
  };
  const categoriesLabels = {
    Action: "Action",
    Comedy: "Comedy",
    Horror: "Horror",
    Romantic: "Romantic",
    Drama: "Drama",
    History: "History",
  };

  const genresLabels = {
    Thriller: "Thriller",
    SciFi: "SciFi",
    Horror: "Horror",
    Romantic: "Romantic",
    Drama: "Drama",
    History: "History",
  };

  const vodLabels = {
    Subscription: "Subscription",
    Rent: "Rental",
    Purchase: "Purchase",
    Advertising: "Advertising",
  };

  const languageOptions = [
    { code: "English", label: "English" },
    { code: "Malayalam", label: "Malayalam" },
    { code: "Tamil", label: "Tamil" },
    { code: "Hindi", label: "Hindi" },
    { code: "Kannada", label: "Kannada" },
    { code: "Telengu", label: "Telengu" },
  ];

  const rentalOptions = ["SD", "HD", "UHD", "ALL"];

  return (
    <div>
          <h2 className="text-2xl font-bold mb-6">Step 1: Title Meta Details</h2>
          <div className="space-y-6">
            
          <div className="flex items-center gap-6">
            {/* Title (Vertically Aligned) */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <TextField
                type="text"
                name="title"
                value={title}
                onChange={handleTitleChange}
                placeholder="Enter Movie Title"
                fullWidth
                variant="outlined"
                className="mt-1 block w-full min-h-[55px] bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 focus:outline-none shadow-sm"
                
              />
            </div>

            {/* Is Featured (Centered to Title) */}
            <div className="bg-white flex items-center justify-center h-[55px] px-3 border border-gray-300 rounded-lg mt-6">
              <input
                id="isFeatured"
                type="checkbox"
                name="isFeatured"
                checked={featured}
                onChange={handleFeaturedChange}
                className="h-5 w-5 rounded border border-gray-400"
              />
              <label
                htmlFor="isFeatured"
                className="ml-2 text-sm font-medium text-gray-700 cursor-pointer select-none"
              >
                Is Featured?
              </label>
            </div>
          </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <TextField
                  name="description"
                  value={description}
                  onChange={handleDescriptionChange}
                  placeholder="Enter description of movie title"
                  fullWidth
                  multiline
                  minRows={5}
                  variant="outlined"
                  className="mt-1 block w-full bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 focus:outline-none shadow-sm"
                  
                />
            </div>

            <div className="flex space-x-4">
              {/* Release Date */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Release Date</label>
                <DatePicker label="" value={selectedDate} onChange={handleDateChange} />
              </div>

              {/* Duration */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Duration (HH:MM:SS)</label>
                <TimePicker label="" value={duration} onChange={handleTimeChange} />
              </div>
              
            </div>
            <div className="flex items-center space-x-4">
              {/* Status */}
              <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <Select
                name="status"
                value={contentStatus}
                onChange={handleStatusChange}
                displayEmpty
                className="mt-1 block w-full min-h-[55px] bg-white rounded-lg shadow-sm border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
              >
                <MenuItem value="" disabled>Select Status</MenuItem>
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="inactive">Inactive</MenuItem>
                <MenuItem value="draft">Draft</MenuItem>
              </Select>
              </div>

              {/* Type */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Title Type</label>
                <Select
                  name="type"
                  value={contentType}
                  onChange={handleTypeChange}
                  displayEmpty
                  className="mt-1 block w-full min-h-[55px] bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 focus:outline-none shadow-sm"
                  
                >
                  <MenuItem value="" disabled>
                    <span className="text-gray-400">Select Type</span>
                  </MenuItem>
                  <MenuItem value="Movie">Movie</MenuItem>
                  <MenuItem value="TV Show">TV Show</MenuItem>
                  <MenuItem value="Web Series">Web Series</MenuItem>
                  <MenuItem value="Live">Live</MenuItem>
                </Select>
              </div>
            </div>

            {/* Country Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Select Category's</label>
              <MultiSelectInput 
                labelInput="Category"
                predefinedOptions={categoriesLabels} 
                selectedValues={selectedCategories} 
                setSelectedValues={handleCategoryChange} 
              />
            </div>

            {/* Country Genres */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Select Genre's</label>
              <MultiSelectInput 
                labelInput="Genre"
                predefinedOptions={genresLabels} 
                selectedValues={selectedGenres} 
                setSelectedValues={handleGenreChange} 
              />
            </div>

            {/* Country Availability */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Listed Country's</label>
              <MultiSelectInput 
                labelInput="Country"
                predefinedOptions={countryLabels} 
                selectedValues={selectedCountries} 
                setSelectedValues={handleCountryChange} 
              />
            </div>
            

            {/* Subtitles */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Select Subtitles</label>
              <MultiInputMaker 
                label="" 
                labelInput="Subtitle"
                textInput={title}
                mediaList={selectedSubtitles} 
                setMediaList={handleSubtitlesChange} 
                languageOptions={languageOptions} 
              />
            </div>

            {/* Audios */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Select Audio Track</label>
              <MultiInputMaker 
                label="" 
                labelInput="Audio" 
                textInput="Title"
                mediaList={selectedAudioTracks} 
                setMediaList={handleAudioTracksChange} 
                languageOptions={languageOptions}
              />
            </div>

            {/* VOD Plans */}
            <div>
              <label className="block text-sm font-medium text-gray-700">VOD Plans</label>
              <MultiSelectInput 
                labelInput="Category"
                predefinedOptions={vodLabels} 
                selectedValues={selectedVODPlans} 
                setSelectedValues={handleVODChange} 
              />
            </div>

            {/* Rental Plans */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Add Rental Plans</label>
              <MultiRentalInputMaker
                rentalList={selectedRentalPlans}
                handleRentType={handleRentType}
                rentalOptions={rentalOptions}
              />
            </div>

          </div>
          
          
        </div>
  );
});

export default TitleForm;
