export const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Caroline Vasconcelos. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
