import styles from '../styles/ThirdContainer.module.scss'
import SignUpButton from "../components/SignUpButton";
import { useEffect, useState } from 'react';

const FourthContainer = ({users}) => {

    // const [users, setUsers] = useState( [
    //     {id: 1, name: 'petya',email:'', phone:''}, 
    //     {id: 2, name: 'petya2',email:'', phone:''}, 
    // ])

    // useEffect(async () => {

       
       
    // }, [])

    return (

        <div className={styles.container}>
            <div className={styles.usersTitle}>
                <h1>Our cheerful users</h1>
            </div>
            <div className={styles.usersSubTitle}>
                <h2>The best specialists are shown below</h2>
            </div>

  {/*           <ul>
                {users.map(user =>
                    <li>
                        {user.name}
                    </li>
                    )}
            </ul> */}

        </div>

    

    );
};
export default FourthContainer;
// export async function getStaticProps(context) {
//     const response = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users')
//     const users = await response.json()

//     return {
//       props: {users}, // will be passed to the page component as props
//     }
//   }