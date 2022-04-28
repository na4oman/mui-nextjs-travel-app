import { createContext, useState } from 'react'
import data from '../../data/data.json'

const AppContext = createContext({
  cities: [],
  filterCities: function (citiesData) {},
  bookmarks: [],
  addToBookmark: function (item) {},
  deleteFromBookmark: function (id) {},
})

export function AppWrapper({ children }) {
  const [filteredCities, setFilteredCities] = useState(data.tours)
  const [bookmarks, setBookmarks] = useState([])

  function filterCitiesHandler(filterValue) {
    if (!filterValue || filterValue === '') return setFilteredCities(data.tours)

    const filteredTours = data.tours.filter(tour =>
      tour.name.toLowerCase().includes(filterValue)
    )

    if (!filteredTours || filteredTours.length === 0)
      return setFilteredCities([])

    setFilteredCities(filteredTours)
  }

  function addToBookmarkHandler(item) {
    setBookmarks(prevState => {
      const uniqueBookmarksArr = new Set([item, ...prevState])
      return [...uniqueBookmarksArr]
    })
  }

  function deleteFromBookmarkHandler(id) {
    const filteredBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(filteredBookmarks)
  }

  const context = {
    cities: filteredCities,
    filterCities: filterCitiesHandler,
    bookmarks: bookmarks,
    addToBookmark: addToBookmarkHandler,
    deleteFromBookmark: deleteFromBookmarkHandler,
  }

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>
}

export default AppContext
