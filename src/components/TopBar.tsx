const ROUTES = {
    anime: '/anime',
    manga: '/manga',
}


export const TopBar = () : React.ReactElement => {
    const currentPath = window.location.pathname;

    return (
        <div className="w-full h-full text-white flex items-center p-6 ">
            <h1 className="text-3xl font-bold mr-12 text-pink-600">AniPick</h1>
            <nav className="flex gap-4 justify-center">
                {Object.entries(ROUTES).map(([name, path]) => (
                    <a 
                        key={name}
                        style={{ fontWeight: currentPath === path ? 'bold' : 'normal', color: currentPath === path ? '#F472B6' : 'inherit' }}
                        className="text-white font-medium hover:underline " 
                        href={path}
                    >
                        {name.charAt(0).toUpperCase() + name.slice(1)}
                    </a>
                ))}
          </nav>
        </div>
    )
}