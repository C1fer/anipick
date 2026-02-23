import { AnimeFilterView } from "../../components/AnimeFilterView/AnimeFilterView"

export const AnimePickPage = () => {
    return (
        <div className="flex justify-center items-start h-screen w-full">
            {/* <h1> Anime Pick Page</h1>
            <span>Select some filters or go with the flow!</span> */}
            <AnimeFilterView />
        </div>
    )
}