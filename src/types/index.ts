// 定義接口，用於限制person對象的具體屬性
export interface PersonInter {
  id: string,
  name: string,
  age: number
}

//定義自定義類型
// export type Persons = Array<PersonInter>
export type Persons = PersonInter[]
