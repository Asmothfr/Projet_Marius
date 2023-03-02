import fs from 'fs'

const filePath = '../database/database.json'

const data = {
  id: 0,
  word: 'premier',
}

const jsonData = JSON.stringify(data)

export const writeFile = () => {
  fs.writeFile(filePath, jsonData, (err) => {
    if (err)
      throw err
  })
}
