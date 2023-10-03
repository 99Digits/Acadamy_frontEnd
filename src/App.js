import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainHome from './home/MainHome';
import Admin from './pages/admin/Admin';
import Admin_register from './pages/admin/components_admin/Admin_register';
import StudentLogin from './pages/student/login/StudentLogin';
import StudentRegiser from './pages/student/register/StudentRegiser';
import Student_dashboard from './pages/student/student_pages/student_dashboard/Student_dashboard';
import View_profile_student from './pages/student/student_pages/student_dashboard/viewprofile/View_profile_student';
import Myprofile_student from './pages/student/student_pages/student_dashboard/my_profile/Myprofile_student';
import Videos_student from './pages/student/student_pages/videos_student/Videos_student';
import Quiz from './pages/student/student_pages/student_dashboard/quiz/Quiz';

import Date_student from './pages/student/student_pages/student_dashboard/date_student/Date_student';
import Corse from './pages/student/student_pages/student_dashboard/student_corse/Corse';
import Notification from './pages/student/student_pages/student_dashboard/notifications/Notification';
function App() {
  return (
    < >
    <Routes>
      <Route path='/' element={<MainHome/>} />
      <Route path='/login_admin' element={<Admin/>}/>
      <Route path='/admin_register' element={<Admin_register/>}/>
      <Route path='/student_register' element={<StudentRegiser/>}/>
      <Route path='/student_login' element={<StudentLogin/>}/>
      <Route path='/student_dashboard' element={<Student_dashboard/>}/>
      <Route path='/student_view' element={<View_profile_student/>}/>
      <Route path='/student_view' element={<View_profile_student/>}/>
      <Route path='/my_profile' element={<Myprofile_student/>}/>
      <Route path='/student_videos' element={<Videos_student/>}/>
      <Route path='/quiz_app' element={<Quiz/>}/>
      <Route path='/student_attendance' element={<Date_student/>}/>
      <Route path='/course' element={<Corse/>}/>
      <Route path='/notifications' element={<Notification/>}/>





    </Routes>

    </>
  );
}

export default App;
