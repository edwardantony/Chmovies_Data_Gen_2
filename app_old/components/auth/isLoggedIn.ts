// utils/isLoggedIn.ts
import { fetchAuthSession } from '@aws-amplify/auth';

export async function isLoggedIn(): Promise<boolean> {
  try {
    const session = await fetchAuthSession();
    console.log(session)
    return session?.tokens?.accessToken ? true : false;
  } catch (error) {
    console.log(error)
    return false;
  }
}
