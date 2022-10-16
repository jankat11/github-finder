import {useContext} from "react"
import Spinner from "../layout/Spinner"
import UserItem from "./UserItem"
import GithubContext from "../../context/github/GithubContext"

function UserResults() {
    
  const {loading, results, } = useContext(GithubContext)



    if (!loading) {
      return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {results.map((user, index) => (
            <UserItem key={index} user={user} / >
          ))}
        </div>
      )
    } else {
      return <Spinner/>
    }
}


export default UserResults