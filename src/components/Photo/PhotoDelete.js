import styles from "./PhotoDelete.module.css";
import { PHOTO_DELETE } from "../../api";
import useFetch from "../../Hooks/useFetch";
import { useNavigate } from "react-router-dom";

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();
  const navigate = useNavigate();

  async function handleClick() {
    const confirm = window.confirm("Are you sure?");
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) navigate("/");
    }
  }

  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>
          Delete
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Delete
        </button>
      )}
    </>
  );
};
export default PhotoDelete;
