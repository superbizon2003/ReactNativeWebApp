import {createContext, useContext} from 'react'

export const DocumentsContext = createContext()

export function useDocuments() {
  return useContext(DocumentsContext)
}
