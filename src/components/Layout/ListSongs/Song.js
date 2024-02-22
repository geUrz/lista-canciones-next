import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { Image } from "semantic-ui-react";
import { Delsong } from "@/api";
import { useAuth } from "@/hooks";
import { Toaster, toast } from "sonner";
import { Confirm } from "../Confirm";
import styles from "./ListSongs.module.css";
import { AppSocketContext } from "@/contexts/AppSocket";

const delSongCtrl = new Delsong();

export function Song(props) {
  const { socket } = useContext(AppSocketContext);

  const { user } = useAuth();

  const router = new useRouter();

  const { songId, song, onReload } = props;

  const [showConfirm, setShowConfirm] = useState(false);

  const openCloseConfirm = () => setShowConfirm((prevState) => !prevState);

  const onDelete = async () => {
    try {
      await delSongCtrl.delete(songId);
      socket.emit("songs", "song deleted");
      onReload();
      toast.warning(" ¡ canción eliminada correctamente ! ");
    } catch (error) {
      console.error(error);
    }
  };

  const noUser = () => {
    if (!user) {
      router.push("join/signin");
      return null;
    } else {
      openCloseConfirm();
    }
  };

  return (
    <>
      <div className={styles.containerListsong}>
        <div>
          <div className={styles.row1}>
            <div>
              {/* <h2>{songId}</h2> */}
              <h1>cancion:</h1>
            </div>
            <div>
              <h1>pedida por:</h1>
            </div>
          </div>
          <div className={styles.row2}>
            <div>
              <h1>{song.titlesong}</h1>
            </div>
            <div>
              <h1>{song.name}</h1>
            </div>
          </div>
          <div className={styles.row3}>
            <div className={styles.mensajes}>
              <h1>Mensaje:&nbsp;</h1>
              <p>{song.message}</p>
            </div>
            {!user ? (
              <div />
            ) : user.username === "admin" ? (
              <div className={styles.containerActions} onClick={noUser}>
                <Image src="/img/trash.png" />
              </div>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>

      <Confirm open={showConfirm} onConfirm={onDelete} onCancel={openCloseConfirm} content="¿ Estas seguro de eliminar la canción ?" />

      <Toaster theme="dark" position="bottom-center" duration={8000} visibleToasts={1} richColors />
    </>
  );
}
