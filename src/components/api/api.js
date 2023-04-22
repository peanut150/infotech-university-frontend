import axios from "axios";
// Note APIs

const instance = axios.create({
  baseURL: "http://localhost:8000",
});

export function GetSchedules() {
  return instance
    .get("/api/v1/schedules/")
    .then((response) => {
      return response.data;
    });
}

export function GetFirstYearSchedules() {
    return instance
      .get("/api/v1/first_year_schedules/")
      .then((response) => {
        return response.data;
      });
  }
  
  export function GetSecondYearSchedules() {
    return instance
      .get("/api/v1/second_year_schedules/")
      .then((response) => {
        return response.data;
      });
  }
  
  export function GetThirdYearSchedules() {
    return instance
      .get("/api/v1/third_year_schedules/")
      .then((response) => {
        return response.data;
      });
  }

  export function GetFourthYearSchedules() {
    return instance
      .get("/api/v1/fourth_year_schedules/")
      .then((response) => {
        return response.data;
      });
  }

export function AddStudent(student) {
  return instance.post("/api/v1/students/", student).then((response) => {
    localStorage.setItem("student_id",response.data.id)
    return response.data;
  }).catch((error)=>{
    return false;
  }
  );
}

export function GetStudent() {
  let id = localStorage.getItem("student_id")
  return instance.get("/api/v1/students/"+id).then((response) => {
    return response.data;
  });
}