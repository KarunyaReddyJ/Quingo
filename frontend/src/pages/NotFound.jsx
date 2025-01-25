import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const NotFound = () => {
    const navigate = useNavigate()
    useEffect(() => {
        setInterval(() => {
            navigate('/')
        }, 2000);
    }, [navigate]);
  return (
    <div style={{ fontSize: "48px", textAlign: "left" }}>NotFound</div>
  )
}

export default NotFound