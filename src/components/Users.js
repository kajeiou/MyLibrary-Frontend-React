
export default function Users() {
    const {userId} = useContext(UserC)
    const navigate = useNavigate();

    const [users, setUsers]= useState([
        {
           bookName: "Un livre vide"
        },
    ]);

    useEffect( ()=> {
        if(!userId) {
            navigate("/login", { replace: true })
        }
        getUser(userId,getToken())
            .then(data => setUser(data));
    },[navigate,userId])

    return(
        <div className="container">

        </div>
    )
}