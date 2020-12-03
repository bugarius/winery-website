import React from "react";

const SearchComponent = () => {
    return (
        <div className="search_mobile">
            <div className="search_form_wrap">
                <form role="search" method="get" className="search_form" action="#">
                    <input
                        type="text"
                        className="search_field"
                        placeholder="Search ..."
                        name="s"
                    />
                    <button
                        type="submit"
                        className="search_submit icon-search"
                        title="Start search"
                    />
                </form>
            </div>
        </div>
    )
};

export default SearchComponent;