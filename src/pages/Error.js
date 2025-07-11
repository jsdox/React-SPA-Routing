import MainNavigation from "../components/MainNavigation";

function Error() {
    return (
        <>
        <MainNavigation/>
        <main>
            <h1>
                An erro occured!
            </h1>
            <p>
                Could not find this page, please refresh or go to the home page!
            </p>
        </main>
        </>
    );
}

export default Error;
