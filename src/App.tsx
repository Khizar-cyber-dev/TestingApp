import './App.css';
import CourseForm from './components/courses/CourseForm';
import CourseList from './components/courses/CourseList';
import useCourseStore from './counterSlice';


function App({ name } : { name : string }) {
  const count = useCourseStore((state) => state.count);
  const increment = useCourseStore((state) => state.increment);
  const decrement = useCourseStore((state) => state.decrement);
  return (
    <div className="main-container">
      <h1 style={{
        fontSize: "2.5rem",
        marginBottom: "2rem"
      }}> My Course list</h1>
      <h1 style={{ fontSize: "2.5rem", marginTop: "10px", marginBottom: "10px"}}>
        {name}
      </h1>
      <CourseForm/>
      <CourseList/>
      <button onClick={increment}>Incremetn</button>
      <span>{count}</span>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;