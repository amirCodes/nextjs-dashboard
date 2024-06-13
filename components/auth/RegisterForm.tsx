import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { signup } from "@/app/(auth)/login/actions";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const RegisterForm = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (data?.user) {
    redirect("/");
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>
          Sign up by adding the info below,Then confirm your email
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <form className="space-y-6">
          <label className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
            Email
          </label>
          <Input
            className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible: ring-offset-0"
            placeholder="Enter Email"
            id="email"
            name="email"
            type="email"
            required
          />
          <label className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
            Password
          </label>
          <Input
            type="password"
            className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible: ring-offset-0"
            placeholder="Enter Password"
            id="password"
            name="password"
            required
          />

          <Button formAction={signup} className="w-full p-2 m-2">
            {" "}
            Sign up
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;
