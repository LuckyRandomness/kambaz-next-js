import GreenCheckmark from "../modules/GreenCheckmark";
import { RiProhibited2Line } from "react-icons/ri";
import { IconContext } from "react-icons";

export default function PublishControls({ togglePublishQuiz, cid, quizId, published}: 
  { togglePublishQuiz: ((courseId: string, quizId: string) => void ); cid: string; quizId: string; published: boolean;}) {
    return (
        <div className="m-3" onClick={() => togglePublishQuiz(cid, quizId)}> 
            {(published) ? <GreenCheckmark/> : (
                <IconContext.Provider value={{ color: "red" }}>
                    <RiProhibited2Line size={20} className="me-1"/>
                </IconContext.Provider>)} 
        </div>
    );
}