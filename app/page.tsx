export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <h1 className="text-primary text-3xl font-bold p-4">Hello World</h1>
      <p className="text-muted-foreground p-4">This is a paragraph</p>
      <div className="bg-accent p-4 m-4">
        <p>This is a section with a gray background</p>
      </div>
    </div>
  );
}
