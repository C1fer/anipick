export const NotFoundPage = () => {
    console.error("404 Not Found: The requested page does not exist.");

    return (
        <div className="flex min-h-full items-center justify-center ">
            <div className="text-center">
                <h1 className="mb-4 text-4xl font-bold">404</h1>
                <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
                <a href="/" className="text-primary underline hover:text-action transition-colors">
                    Return to Home
                </a>
            </div>
        </div>
  );
};
