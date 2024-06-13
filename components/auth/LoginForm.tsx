import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { login, signup } from "@/app/(auth)/login/actions";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Label } from "../ui/label";

export default async function LoginPage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (data?.user) {
    redirect("/");
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Log into your account with your credentials
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <form className="space-y-6">
          <div className="grid w-full gap-1.5">
            <Label
              htmlFor="email"
              className="uppercase text-xs font-bold text-zinc-500 dark:text-white"
            >
              Email
            </Label>
            <Input
              className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible: ring-offset-0"
              placeholder="Enter Email"
              id="email"
              name="email"
              type="email"
              required
            />
          </div>
          <div className="grid w-full gap-1.5">
            <Label
              htmlFor="password"
              className="uppercase text-xs font-bold text-zinc-500 dark:text-white"
            >
              Password
            </Label>
            <Input
              type="password"
              className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible: ring-offset-0"
              placeholder="Enter Password"
              id="password"
              name="password"
              required
            />
          </div>

          <Button formAction={login} className="p-2 ml-4 mr-4">
            {" "}
            Log in{" "}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
