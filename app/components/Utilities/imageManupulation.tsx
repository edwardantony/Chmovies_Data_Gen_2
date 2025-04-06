type ImageType = "portrait" | "landscape";
type ThumbnailSet = { [key: string]: File };

interface ImageData {
  original: File;
  thumbnails: ThumbnailSet;
}

interface ImagesData {
  images: {
    portrait?: ImageData;
    landscape?: ImageData;
  };
}

export const imageManupulation = (
  imagesData: ImagesData,
  type: ImageType,
  resizedImage: File,
  thumbnails: ThumbnailSet
): ImagesData => {
  return {
    images: {
      ...imagesData.images,
      [type]: {
        original: resizedImage,
        thumbnails,
      },
    },
  };
};
