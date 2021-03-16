/* 
- ?가 있으면 이 인터페이스에는 age가 있을 수도 없을 수도 있다.
- 라이브러리를 위한 type을 사용할 때는 => interface
- 어떤걸 사용하든 일관성 있게 사용하는 것이 좋다.
*/

// interface Person {
//   name: string;
//   age?: number;
// }

// interface Developer extends Person {
//   skills: string[];
// }

// type Alias

type Person = {
  name: string;
  age?: number;
};

//&는 Person을 상속 받는다.
type Developer = Person & {
  skills: string[];
};

const person: Person = {
  name: "김사랑",
  age: 20,
};

const expert: Developer = {
  name: "김개발",
  skills: ["javascript", "react", "typescript"],
};

type People = Person[];
const people: People = [person, expert];

type Color = "red" | "orange" | "red";
const color: Color = "orange";
