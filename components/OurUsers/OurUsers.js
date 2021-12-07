import { useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import UserRequests from "../../helpers/users";
import styles from "./OurUsers.module.scss";
import Avatar from '@mui/material/Avatar';
import fallbackImg from "../../public/images/fallback.jpg";



const OurUsers = () => {
  const { width } = useWindowDimensions();
  const getUsersForRequest = width > 768 ? 9 : width < 361 ? 3 : 6;
  const [users, setUsers] = useState([]);
  const [offset, setOffset] = useState(0);
  const [areUsersOver, setAreUsersOver] = useState(false);
  const fallbackImage = "../../public/images/fallback.svg"

  const fetchUsers = async () => {
    try {
      const data = await UserRequests.getUsers(offset, getUsersForRequest);

      setUsers((prevState) => [...prevState, ...data.data.users]);
      setOffset((prevState) => prevState + getUsersForRequest);
    } catch {
      setAreUsersOver(true);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  
  return (
    <div className={styles.container} id={"ourUsers"}>
      <div className={styles.usersTitle}>
        <h1>Our cheerful users</h1>
      </div>
      <div className={styles.usersSubTitle}>
        <h2>The best specialists are shown below</h2>
      </div>

      <ul className={styles.userList}>
        {users.map((user) => (
            <li key={user.name}>
              <div className={styles.userPhoto}>
                <Avatar src={user.photo}  alt="photo"> 
                  <img src={fallbackImg.src} />
                </Avatar></div>              
              <div className={styles.userName}><h2>{user.name}</h2></div>
              <div className={styles.userPosition}>{user.position}</div>
              <div className={styles.userEmail}>{user.email}</div>
              <div className={styles.userPhone}>{user.phone}</div>        
            </li>
        ))}
      </ul>
      <div className={styles.showMoreBtn} >
        {!areUsersOver && <button onClick={fetchUsers}>Show more</button>}
      </div>
      
    </div>
  );
};
export default OurUsers;

