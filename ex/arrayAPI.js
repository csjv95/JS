// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join();
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(','); //split는 구분자를 넣지 않으면 첫번째 배열에 받아온 문자열을 모두 넣는다(배열 자체를 수정)
  console.log(result);

}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array); //reverse는 배열 자체를 변화 시키고 변화한 return 값을 변환한다
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2);  //배열에서 원하는 부분만 return해서 받아온다()
  console.log(result);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('Covinus', 29, true, 45),
  new Student('SJ', 28, false, 80),
  new Student('Mark', 30, true, 90),
  new Student('Dean', 40, false, 66),
  new Student('Stive', 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find(function(student) {
    return student.score === 90;
  })
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const result = students.filter(function(student) {
    return student.enrolled;
  })
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map(function(student) {
    return student.score;
  })
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  const result = students.some(function(student) {
    return student.score < 50;
  })
  console.log(result);
}

// Q9. compute students' average score
{
  const result = students.reduce(function(acc,cur){
    return acc + cur.score;
  },0)
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map(function(student){
    return student.score;
  }).join();
  console.log(result);
}

// last sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students.map(function(student){
    return student.score;
  }).sort(function(a,b){
    return a - b;
  }).join();
  console.log(result);
}