'use client'

const SearchForm = ({url}:{url:string}) => {
    return (
        <div>
            <form action={url}>
                <input type="text" name={'search'}/>
                <button className={'inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0'}>search</button>
            </form>
        </div>
    );
};

export default SearchForm;