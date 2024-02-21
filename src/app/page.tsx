import { BlogForm } from "@/components/sitecomponents/forms/form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-md w-full">
        <BlogForm />
      </div>
    </main>
  );
}
