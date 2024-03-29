import { Fragment, useState, useEffect } from 'react';
import { Form, Button, Table, Modal } from 'react-bootstrap';
import checkMark from './images/checkMark.png';
import wrongMark from './images/wrongMark.png';
import circle from './images/circle.png';
import white from './images/white.png';
import './App.css';
// import Swal from 'sweetalert2';


function App() {
    
    const [xTurn, setXTurn] = useState(true);
    const [oTurn, setOTurn] = useState(false);
    const [whoWin, setWhoWin] = useState('');
    const [xPoint, setXPoint] = useState(0);
    const [oPoint, setOPoint] = useState(0);
    const [timesClicked, setTimesClicked] = useState(0);
    const [playerx, setPlayerX] = useState('Tên Người Chơi');
    const [playero, setPlayerO] = useState('Tên Người Chơi');
    const [isDoneLoading, setIsDoneLoading] = useState(false);

    const [playernamex, setPlayerNameX] = useState('Người Chơi X');
    const [playernameo, setPlayerNameO] = useState('Người Chơi O');

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

      // X rows and Columns
    let [xr1c1, setXR1C1] = useState({status: false, isClicked: false});
    let [xr1c2, setXR1C2] = useState({status: false, isClicked: false});
    let [xr1c3, setXR1C3] = useState({status: false, isClicked: false});

    let [xr2c1, setXR2C1] = useState({status: false, isClicked: false});
    let [xr2c2, setXR2C2] = useState({status: false, isClicked: false});
    let [xr2c3, setXR2C3] = useState({status: false, isClicked: false});

    let [xr3c1, setXR3C1] = useState({status: false, isClicked: false});
    let [xr3c2, setXR3C2] = useState({status: false, isClicked: false});
    let [xr3c3, setXR3C3] = useState({status: false, isClicked: false});

      // O Rows and Columns
    let [or1c1, setOR1C1] = useState({status: false, isClicked: false});
    let [or1c2, setOR1C2] = useState({status: false, isClicked: false});
    let [or1c3, setOR1C3] = useState({status: false, isClicked: false});

    let [or2c1, setOR2C1] = useState({status: false, isClicked: false});
    let [or2c2, setOR2C2] = useState({status: false, isClicked: false});
    let [or2c3, setOR2C3] = useState({status: false, isClicked: false});

    let [or3c1, setOR3C1] = useState({status: false, isClicked: false});
    let [or3c2, setOR3C2] = useState({status: false, isClicked: false});
    let [or3c3, setOR3C3] = useState({status: false, isClicked: false});


    useEffect(() => {

        // When X wins
        if(
          (xr1c1.status && xr1c2.status && xr1c3.status) ||
          (xr2c1.status && xr2c2.status && xr2c3.status) ||
          (xr3c1.status && xr3c2.status && xr3c3.status)
        ){setWhoWin('x')}


        else if(
          (xr3c1.status && xr2c1.status && xr1c1.status) ||
          (xr3c2.status && xr2c2.status && xr1c2.status) ||
          (xr3c3.status && xr2c3.status && xr1c3.status)
        ){setWhoWin('x')}


        else if(
          (xr3c3.status && xr2c2.status && xr1c1.status) ||
          (xr3c1.status && xr2c2.status && xr1c3.status)
        ){setWhoWin('x')}


        // When O wins
        else if(
          (or1c1.status && or1c2.status && or1c3.status) ||
          (or2c1.status && or2c2.status && or2c3.status) ||
          (or3c1.status && or3c2.status && or3c3.status)
        ){setWhoWin('o')}


        else if(
          (or3c1.status && or2c1.status && or1c1.status) ||
          (or3c2.status && or2c2.status && or1c2.status) ||
          (or3c3.status && or2c3.status && or1c3.status)
        ){setWhoWin('o')}


        else if(
          (or3c3.status && or2c2.status && or1c1.status) ||
          (or3c1.status && or2c2.status && or1c3.status)
        ){setWhoWin('o')}

        else if(whoWin == ''&& timesClicked == 9){
          setWhoWin('draw');
        }

    }, [timesClicked])



    useEffect(() => {
      if(whoWin == 'x'){
        setXPoint(xPoint + 1);
        handleShow();
      }

      if(whoWin == 'o'){
        setOPoint(oPoint + 1);
        handleShow();
      }

      if(whoWin == 'draw'){
        handleShow();
      }

    }, [whoWin])




    function changeTurn(x, o, setX, setO){

      if(x.isClicked || o.isClicked){
      } else{
        if(xTurn){
          setX({status: true, isClicked: true});
          setXTurn(false);
          setOTurn(true);
        };
        if(oTurn){
          setO({status: true, isClicked: true});
          setXTurn(true);
          setOTurn(false);
        }

        setTimesClicked(timesClicked + 1);      
      }
    }


    function playAgain(){
      handleClose();

      // Close all X
      setXR1C1({status: false, isClicked: false});
      setXR1C2({status: false, isClicked: false});
      setXR1C3({status: false, isClicked: false});

      setXR2C1({status: false, isClicked: false});
      setXR2C2({status: false, isClicked: false});
      setXR2C3({status: false, isClicked: false});

      setXR3C1({status: false, isClicked: false});
      setXR3C2({status: false, isClicked: false});
      setXR3C3({status: false, isClicked: false});


      // Close all O
      setOR1C1({status: false, isClicked: false});
      setOR1C2({status: false, isClicked: false});
      setOR1C3({status: false, isClicked: false});

      setOR2C1({status: false, isClicked: false});
      setOR2C2({status: false, isClicked: false});
      setOR2C3({status: false, isClicked: false});

      setOR3C1({status: false, isClicked: false});
      setOR3C2({status: false, isClicked: false});
      setOR3C3({status: false, isClicked: false});

      setTimesClicked(0);

      setWhoWin('');
    }


    function resetScore(){
      setOPoint(0);
      setXPoint(0);
    }

    function saveName(){
      setPlayerNameX(playerx);
      setPlayerNameO(playero);
      handleClose2();
    }

    function clearName(setName){
      setName('No player');
    }
  

  return (
      <div className="d-flex flex-column table-wrapper justify-content-center align-items-center p-2">
        <div className="p-5 mb-5">
          {
            (xTurn) ? 
              <h3>{playernamex} <img className="xturn" src={wrongMark} /></h3>
            :
              <h3>{playernameo} <img className="oturn" src={circle} /></h3>
          }
        </div>

        <div className="d-flex">
          <div className="pr-5 mr-5">
            <p className="text-center">{playernamex}</p>
            <h5 className="text-center"><img className="xturn pb-1" src={wrongMark} /> Điểm Số:</h5>
            <h5 className="text-center">{xPoint}</h5>
          </div>

          <div className="mr-5 ml-5 mb-5">
            <Table borderless className="w-25">
              <tbody className="text-center">
                <tr className="border-bottom">
                  <td className="border-right" onClick={() => changeTurn(xr1c1, or1c1, setXR1C1, setOR1C1)}>
                    {
                      (xr1c1.status) ?
                        <img src={wrongMark} />
                      :
                        (or1c1.status) ?
                          <img src={circle} />
                        :
                          <img src={white} />
                    }
                  </td>
                  <td className="border-right" onClick={() => changeTurn(xr1c2, or1c2, setXR1C2, setOR1C2)}>
                    {
                      (xr1c2.status) ?
                        <img src={wrongMark} />
                      :
                        (or1c2.status) ?
                          <img src={circle} />
                        :
                          <img src={white} />
                    }
                  </td>
                  <td onClick={() => changeTurn(xr1c3, or1c3, setXR1C3, setOR1C3)}>
                    {
                      (xr1c3.status) ?
                        <img src={wrongMark} />
                      :
                        (or1c3.status) ?
                          <img src={circle} />
                        :
                          <img src={white} />
                    }
                  </td>
                </tr>
                <tr className="border-bottom">
                  <td className="border-right" onClick={() => changeTurn(xr2c1, or2c1, setXR2C1, setOR2C1)}>
                    {
                      (xr2c1.status) ?
                        <img src={wrongMark} />
                      :
                        (or2c1.status) ?
                          <img src={circle} />
                        :
                          <img src={white} />
                    }
                  </td>
                  <td className="border-right" onClick={() => changeTurn(xr2c2, or2c2, setXR2C2, setOR2C2)}>
                    {
                      (xr2c2.status) ?
                        <img src={wrongMark} />
                      :
                        (or2c2.status) ?
                          <img src={circle} />
                        :
                          <img src={white} />
                    }
                  </td>
                  <td onClick={() => changeTurn(xr2c3, or2c3, setXR2C3, setOR2C3)}>
                    {
                      (xr2c3.status) ?
                        <img src={wrongMark} />
                      :
                        (or2c3.status) ?
                          <img src={circle} />
                        :
                          <img src={white} />
                    }
                  </td>
                  
                </tr>
                <tr>
                  <td className="border-right" onClick={() => changeTurn(xr3c1, or3c1, setXR3C1, setOR3C1)}>
                    {
                      (xr3c1.status) ?
                        <img src={wrongMark} />
                      :
                        (or3c1.status) ?
                          <img src={circle} />
                        :
                          <img src={white} />
                    }
                  </td>
                  <td className="border-right" onClick={() => changeTurn(xr3c2, or3c2, setXR3C2, setOR3C2)}>
                    {
                      (xr3c2.status) ?
                        <img src={wrongMark} />
                      :
                        (or3c2.status) ?
                          <img src={circle} />
                        :
                          <img src={white} />
                    }
                  </td>
                  <td onClick={() => changeTurn(xr3c3, or3c3, setXR3C3, setOR3C3)}>
                    {
                      (xr3c3.status) ?
                        <img src={wrongMark} />
                      :
                        (or3c3.status) ?
                          <img src={circle} />
                        :
                          <img src={white} />
                    }
                  </td>
                  
                </tr>
                
              </tbody>
            </Table>
          </div>

          <div className="ml-5 pl-5">
            <p className="text-center">{playernameo}</p>
            <h5 className="text-center pb-1"><img className="oturn" src={circle} /> Điểm Số:</h5>
            <h5 className="text-center">{oPoint}</h5>
          </div>
        </div>

      

        

        <div className="mt-4">
          <Button size="sm" variant="warning" className="mr-4" onClick={playAgain}>Đặt lại bảng</Button>
          <Button size="sm" variant="warning" className="mr-4" onClick={resetScore}>Đặt lại điểm </Button>
          <Button size="sm" variant="danger" onClick={handleShow2}>Chỉnh sửa / Xóa người chơi</Button>
        </div>

        


        <Modal show={show}>
          <Modal.Header className="text-center">
            {
              (whoWin == 'x') ?
                <Modal.Title>{playernamex} Thắng</Modal.Title>
              :
                (whoWin == 'o') ?
                  <Modal.Title>{playernameo} Thắng</Modal.Title>
                :
                  <Modal.Title>Hòa</Modal.Title>
            }
          </Modal.Header>
          
          <Modal.Footer className="text-center">
            <Button variant="warning" onClick={playAgain}>
              Vòng Khác
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={show2} onHide={handleClose2}>
          <Modal.Header className="text-center">
            <Modal.Title>Player Roster</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex">
              <Form.Control 
                type="text" 
                placeholder="Tên Người Chơi"
                value={playerx} 
                onChange={e => setPlayerX(e.target.value)}
              /> <Button variant="danger" className="ml-2" onClick={() => clearName(setPlayerX)}>X</Button>
            </div>
            <div className="d-flex mt-4">
              <Form.Control 
                type="text" 
                placeholder="Tên Người Chơi"
                value={playero}
                onChange={e => setPlayerO(e.target.value)}
              /> <Button variant="danger" className="ml-2" onClick={() => clearName(setPlayerO)}>X</Button>
            </div>
          </Modal.Body>
          <Modal.Footer className="text-center">
            <Button variant="warning" type="submit" onClick={handleClose2 }>
              Cancel
            </Button>
            <Button variant="primary" type="submit" onClick={saveName}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>


      </div>
      
  )
}

export default App;
