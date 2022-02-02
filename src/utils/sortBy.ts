import { Image } from '../features/images/imageSlice'

export function sortByTitle(data: Image[]): Image[] {
  const sorted = [...data]
  sorted.sort(function (a, b) {
    const titleA = a.description?.split(' ')[0]
    const titleB = b.description?.split(' ')[0]
    if (titleA < titleB) {
      return -1
    }
    if (titleA > titleB) {
      return 1
    }

    return 0
  })
  return sorted
}

export function sortByDate(data: Image[]): Image[] {
  const sorted = [...data]
  sorted.sort(function (a, b) {
    const dateA = a.date
    const dateB = b.date
    if (dateA < dateB) {
      return -1
    }
    if (dateA > dateB) {
      return 1
    }

    return 0
  })
  return sorted
}

export function sortBySize(data: Image[]): Image[] {
  const sorted = [...data]
  sorted.sort(function (a, b) {
    const sizeA = a.size
    const sizeB = b.size
    if (sizeA < sizeB) {
      return -1
    }
    if (sizeA > sizeB) {
      return 1
    }

    return 0
  })
  return sorted
}
