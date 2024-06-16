import { createClient } from "@/utils/supabase/client"

const supabase = createClient()

export async function getUser() {
  try {
   

    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) {
      console.error('Error fetching user:', error);
      return null;
    }
    const userData=data.user;
    return userData;
    
  } catch (error) {
    console.error('Unexpected error:', error);
    return null;
  }
}
