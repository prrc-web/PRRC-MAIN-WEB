export interface User {
  id: string
  displayName?: string
  email: string
  password: string
  createdAt: string
  updatedAt: string
}

export interface Media {
  id: string
  alt: string
  url?: string
  filename?: string
  mimeType?: string
  filesize?: number
  width?: number
  height?: number
  sizes?: {
    thumbnail?: {
      url?: string
      width?: number
      height?: number
      mimeType?: string
      filesize?: number
      filename?: string
    }
    card?: {
      url?: string
      width?: number
      height?: number
      mimeType?: string
      filesize?: number
      filename?: string
    }
    tablet?: {
      url?: string
      width?: number
      height?: number
      mimeType?: string
      filesize?: number
      filename?: string
    }
  }
  createdAt: string
  updatedAt: string
}

export interface Researcher {
  id: string
  name: string
  title?: string
  bio?: any // RichText field
  profilePicture?: string | Media
  contact: {
    email: string
    phone?: string
  }
  resume?: string | Media
  createdAt: string
  updatedAt: string
}

export interface PayloadResponse<T> {
  docs: T[]
  totalDocs: number
  limit: number
  totalPages: number
  page: number
  pagingCounter: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage: number | null
  nextPage: number | null
}
