import React from "react";
import Button from "./Button";
import Score2 from "./Score2"
import WinPlayer2 from "./WinPlayer2";

class Game2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            picture: [],
            selectedPicture: [],
            lastMove: 0,
            score1: 0,
            score2: 0,
            turn: 1,
            time: Date.now(),
            image0: false,
            image1: false,
            image2: false,
            image3: false,
            image4: false,
            image5: false,
            image6: false,
            image7: false,
            image8: false,
            image9: false,
            image10: false,
            image11: false,
            image12: false,
            image13: false,
            image14: false,
            image15: false,
        }
    }

    componentDidMount = () => {
        let array = [
            "/images/alien_monster.jpg", "/images/anchor.jpg", "/images/cherries.jpg", "/images/cold_face.jpg",
            "/images/french_fries.jpg", "/images/goblin.jpg", "/images/lollipop.jpg", "/images/panda.jpg",
            "/images/alien_monster.jpg", "/images/anchor.jpg", "/images/cherries.jpg", "/images/cold_face.jpg",
            "/images/french_fries.jpg", "/images/goblin.jpg", "/images/lollipop.jpg", "/images/panda.jpg"]
        let picture = []
        for (let i = 0; i < 16; i++) {
            let numRandom = Math.floor((Math.random() * (array.length)))
            picture.push(array[numRandom])
            array.splice(numRandom, 1)
        }
        this.setState({ picture })
    }

    isPair = (tableau) => {
        console.log("Pair :", [...tableau])
        if (tableau.length === 2) {
            if (tableau[0].id !== tableau[1].id) {
                if (tableau[0].src === tableau[1].src) {
                    if ((this.state.turn % 2) === 0) {
                        let name1 = "image" + tableau[0].id
                        let name2 = "image" + tableau[1].id
                        let state = { ...this.state }
                        this.setState({ [name1]: "found", [name2]: "found" })
                        console.log("pair :" + state)
                        this.setState({ state })
                        let score2Plus = this.state.score2;
                        score2Plus++
                        this.setState({ score2: score2Plus, selectedPicture: [] })
                        return true
                    } else {
                        let name1 = "image" + tableau[0].id
                        let name2 = "image" + tableau[1].id
                        let state = { ...this.state }
                        this.setState({ [name1]: "found", [name2]: "found" })
                        console.log("pair :" + state)
                        this.setState({ state })
                        let score1Plus = this.state.score1;
                        score1Plus++
                        this.setState({ score1: score1Plus, selectedPicture: [] })
                        return true
                    }
                } else {
                    let turn = this.state.turn
                    turn++
                    this.setState({ selectedPicture: [], turn })
                }
            } else {
                let turn = this.state.turn
                turn++
                this.setState({ turn, selectedPicture: [], turn })
            }
        }
        return false
    }


    imageAnime = (id, e) => {
        let name = 'image' + id
        const time = 500
        if (Date.now() - this.state.lastMove > time) {
            console.log(Date.now() - this.state.lastMove)
            if (this.state[name] !== "found") {
                if (this.state.image0 === true || this.state.image1 === true || this.state.image2 === true || this.state.image3 === true || this.state.image4 === true || this.state.image5 === true || this.state.image6 === true || this.state.image7 === true || this.state.image8 === true || this.state.image9 === true || this.state.image10 === true || this.state.image11 === true || this.state.image12 === true || this.state.image13 === true || this.state.image14 === true || this.state.image15 === true) {
                    let picture = { src: e.target.children[0].src, id: id }
                    let selectedPicture = [...this.state.selectedPicture]
                    selectedPicture.push(picture)
                    this.setState({ selectedPicture: [...selectedPicture], [name]: true })
                    console.log(this.state.selectedPicture)
                    let pair = this.isPair(selectedPicture)
                    console.log(pair)
                    if (pair === false) {
                        let found = this.state.foundPicture
                        if (this.state.image0 !== "found") {
                            setTimeout(() => { this.setState({ image0: false }) }, time)
                        }
                        if (this.state.image1 !== "found") {
                            setTimeout(() => { this.setState({ image1: false }) }, time)
                        }
                        if (this.state.image2 !== "found") {
                            setTimeout(() => { this.setState({ image2: false }) }, time)
                        }
                        if (this.state.image3 !== "found") {
                            setTimeout(() => { this.setState({ image3: false }) }, time)
                        }
                        if (this.state.image4 !== "found") {
                            setTimeout(() => { this.setState({ image4: false }) }, time)
                        }
                        if (this.state.image5 !== "found") {
                            setTimeout(() => { this.setState({ image5: false }) }, time)
                        }
                        if (this.state.image6 !== "found") {
                            setTimeout(() => { this.setState({ image6: false }) }, time)
                        }
                        if (this.state.image7 !== "found") {
                            setTimeout(() => { this.setState({ image7: false }) }, time)
                        }
                        if (this.state.image8 !== "found") {
                            setTimeout(() => { this.setState({ image8: false }) }, time)
                        }
                        if (this.state.image9 !== "found") {
                            setTimeout(() => { this.setState({ image9: false }) }, time)
                        }
                        if (this.state.image10 !== "found") {
                            setTimeout(() => { this.setState({ image10: false }) }, time)
                        }
                        if (this.state.image11 !== "found") {
                            setTimeout(() => { this.setState({ image11: false }) }, time)
                        }
                        if (this.state.image12 !== "found") {
                            setTimeout(() => { this.setState({ image12: false }) }, time)
                        }
                        if (this.state.image13 !== "found") {
                            setTimeout(() => { this.setState({ image13: false }) }, time)
                        }
                        if (this.state.image14 !== "found") {
                            setTimeout(() => { this.setState({ image14: false }) }, time)
                        }
                        if (this.state.image15 !== "found") {
                            setTimeout(() => { this.setState({ image15: false }) }, time)
                        }

                        this.setState({ lastMove: Date.now() })
                    }
                } else {
                    let picture = { src: e.target.children[0].src, id: id }
                    let selectedPicture = [...this.state.selectedPicture]
                    selectedPicture.push(picture)
                    this.setState({ selectedPicture: [...selectedPicture], lastMove: Date.now(), [name]: true })
                    this.isPair(selectedPicture)

                }
            }
        }
    }


    render() {
        if ((this.state.score1 + this.state.score2) === 8) {
            if (this.state.score1 > this.state.score2) {
                return (
                    <div id='table'>
                        <div id='game'>
                            <div className="line" >
                                <div className="card" onClick={(e) => { this.imageAnime(0, e) }}><img className={this.state.image0 ? "animIn" : ""} src={this.state.picture[0]} /></div>
                                <div className="card" onClick={(e) => { this.imageAnime(1, e) }}><img className={this.state.image1 ? "animIn" : ""} src={this.state.picture[1]} /></div>
                                <div className="card" onClick={(e) => { this.imageAnime(2, e) }}><img className={this.state.image2 ? "animIn" : ""} src={this.state.picture[2]} /></div>
                                <div className="card" onClick={(e) => { this.imageAnime(3, e) }}><img className={this.state.image3 ? "animIn" : ""} src={this.state.picture[3]} /></div>
                            </div>
                            <div className="line">
                                <div className="card" onClick={(e) => { this.imageAnime(4, e) }}><img className={this.state.image4 ? "animIn" : ""} src={this.state.picture[4]} /></div>
                                <div className="card" onClick={(e) => { this.imageAnime(5, e) }}><img className={this.state.image5 ? "animIn" : ""} src={this.state.picture[5]} /></div>
                                <div className="card" onClick={(e) => { this.imageAnime(6, e) }}><img className={this.state.image6 ? "animIn" : ""} src={this.state.picture[6]} /></div>
                                <div className="card" onClick={(e) => { this.imageAnime(7, e) }}><img className={this.state.image7 ? "animIn" : ""} src={this.state.picture[7]} /></div>
                            </div>
                            <div className="line">
                                <div className="card" onClick={(e) => { this.imageAnime(8, e) }}><img className={this.state.image8 ? "animIn" : ""} src={this.state.picture[8]} /></div>
                                <div className="card" onClick={(e) => { this.imageAnime(9, e) }}><img className={this.state.image9 ? "animIn" : ""} src={this.state.picture[9]} /></div>
                                <div className="card" onClick={(e) => { this.imageAnime(10, e) }}><img className={this.state.image10 ? "animIn" : ""} src={this.state.picture[10]} /></div>
                                <div className="card" onClick={(e) => { this.imageAnime(11, e) }}><img className={this.state.image11 ? "animIn" : ""} src={this.state.picture[11]} /></div>
                            </div>
                            <div className="line">
                                <div className="card" onClick={(e) => { this.imageAnime(12, e) }}><img className={this.state.image12 ? "animIn" : ""} src={this.state.picture[12]} /></div>
                                <div className="card" onClick={(e) => { this.imageAnime(13, e) }}><img className={this.state.image13 ? "animIn" : ""} src={this.state.picture[13]} /></div>
                                <div className="card" onClick={(e) => { this.imageAnime(14, e) }}><img className={this.state.image14 ? "animIn" : ""} src={this.state.picture[14]} /></div>
                                <div className="card" onClick={(e) => { this.imageAnime(15, e) }}><img className={this.state.image15 ? "animIn" : ""} src={this.state.picture[15]} /></div>
                            </div>
                        </div>
                        <div id="other">
                            <Score2 score1={this.state.score1} score2={this.state.score2} turn={this.state.turn} />
                            <Button />
                            <WinPlayer2 player={`Player 1 a gagné avec ${this.state.score1} points`} />
                        </div>
                    </div>
                );
            } else if (this.state.score1 < this.state.score2) {
                return (
                    <div id='table'>
                        <div id='game'>
                            <div className="line" >
                                <div className="card" onClick={(e) => { this.imageAnime(0, e) }}><img className={this.state.image0 ? "animIn" : ""} src={this.state.picture[0]} /></div>
                                <div className="card" onClick={(e) => { this.imageAnime(1, e) }}><img className={this.state.image1 ? "animIn" : ""} src={this.state.picture[1]} /></div>
                                <div className="card" onClick={(e) => { this.imageAnime(2, e) }}><img className={this.state.image2 ? "animIn" : ""} src={this.state.picture[2]} /></div>
                                <div className="card" onClick={(e) => { this.imageAnime(3, e) }}><img className={this.state.image3 ? "animIn" : ""} src={this.state.picture[3]} /></div>
                            </div>
                            <div className="line">
                                <div className="card" onClick={(e) => { this.imageAnime(4, e) }}><img className={this.state.image4 ? "animIn" : ""} src={this.state.picture[4]} /></div>
                                <div className="card" onClick={(e) => { this.imageAnime(5, e) }}><img className={this.state.image5 ? "animIn" : ""} src={this.state.picture[5]} /></div>
                                <div className="card" onClick={(e) => { this.imageAnime(6, e) }}><img className={this.state.image6 ? "animIn" : ""} src={this.state.picture[6]} /></div>
                                <div className="card" onClick={(e) => { this.imageAnime(7, e) }}><img className={this.state.image7 ? "animIn" : ""} src={this.state.picture[7]} /></div>
                            </div>
                            <div className="line">
                                <div className="card" onClick={(e) => { this.imageAnime(8, e) }}><img className={this.state.image8 ? "animIn" : ""} src={this.state.picture[8]} /></div>
                                <div className="card" onClick={(e) => { this.imageAnime(9, e) }}><img className={this.state.image9 ? "animIn" : ""} src={this.state.picture[9]} /></div>
                                <div className="card" onClick={(e) => { this.imageAnime(10, e) }}><img className={this.state.image10 ? "animIn" : ""} src={this.state.picture[10]} /></div>
                                <div className="card" onClick={(e) => { this.imageAnime(11, e) }}><img className={this.state.image11 ? "animIn" : ""} src={this.state.picture[11]} /></div>
                            </div>
                            <div className="line">
                                <div className="card" onClick={(e) => { this.imageAnime(12, e) }}><img className={this.state.image12 ? "animIn" : ""} src={this.state.picture[12]} /></div>
                                <div className="card" onClick={(e) => { this.imageAnime(13, e) }}><img className={this.state.image13 ? "animIn" : ""} src={this.state.picture[13]} /></div>
                                <div className="card" onClick={(e) => { this.imageAnime(14, e) }}><img className={this.state.image14 ? "animIn" : ""} src={this.state.picture[14]} /></div>
                                <div className="card" onClick={(e) => { this.imageAnime(15, e) }}><img className={this.state.image15 ? "animIn" : ""} src={this.state.picture[15]} /></div>
                            </div>
                        </div>
                        <div id="other">
                            <Score2 score1={this.state.score1} score2={this.state.score2} turn={this.state.turn} />
                            <Button />
                            <WinPlayer2 player={`Player 2 a gagné avec ${this.state.score2} points`} />
                        </div>
                    </div>
                );
            } else {
                return (
                    <div id='table'>
                        <div id='game'>
                            <div className="line" >
                                <div className="card" onClick={(e) => { this.imageAnime(0, e) }}><img className={this.state.image0 ? "animIn" : ""} src={this.state.picture[0]} /></div>
                                <div className="card" onClick={(e) => { this.imageAnime(1, e) }}><img className={this.state.image1 ? "animIn" : ""} src={this.state.picture[1]} /></div>
                                <div className="card" onClick={(e) => { this.imageAnime(2, e) }}><img className={this.state.image2 ? "animIn" : ""} src={this.state.picture[2]} /></div>
                                <div className="card" onClick={(e) => { this.imageAnime(3, e) }}><img className={this.state.image3 ? "animIn" : ""} src={this.state.picture[3]} /></div>
                            </div>
                            <div className="line">
                                <div className="card" onClick={(e) => { this.imageAnime(4, e) }}><img className={this.state.image4 ? "animIn" : ""} src={this.state.picture[4]} /></div>
                                <div className="card" onClick={(e) => { this.imageAnime(5, e) }}><img className={this.state.image5 ? "animIn" : ""} src={this.state.picture[5]} /></div>
                                <div className="card" onClick={(e) => { this.imageAnime(6, e) }}><img className={this.state.image6 ? "animIn" : ""} src={this.state.picture[6]} /></div>
                                <div className="card" onClick={(e) => { this.imageAnime(7, e) }}><img className={this.state.image7 ? "animIn" : ""} src={this.state.picture[7]} /></div>
                            </div>
                            <div className="line">
                                <div className="card" onClick={(e) => { this.imageAnime(8, e) }}><img className={this.state.image8 ? "animIn" : ""} src={this.state.picture[8]} /></div>
                                <div className="card" onClick={(e) => { this.imageAnime(9, e) }}><img className={this.state.image9 ? "animIn" : ""} src={this.state.picture[9]} /></div>
                                <div className="card" onClick={(e) => { this.imageAnime(10, e) }}><img className={this.state.image10 ? "animIn" : ""} src={this.state.picture[10]} /></div>
                                <div className="card" onClick={(e) => { this.imageAnime(11, e) }}><img className={this.state.image11 ? "animIn" : ""} src={this.state.picture[11]} /></div>
                            </div>
                            <div className="line">
                                <div className="card" onClick={(e) => { this.imageAnime(12, e) }}><img className={this.state.image12 ? "animIn" : ""} src={this.state.picture[12]} /></div>
                                <div className="card" onClick={(e) => { this.imageAnime(13, e) }}><img className={this.state.image13 ? "animIn" : ""} src={this.state.picture[13]} /></div>
                                <div className="card" onClick={(e) => { this.imageAnime(14, e) }}><img className={this.state.image14 ? "animIn" : ""} src={this.state.picture[14]} /></div>
                                <div className="card" onClick={(e) => { this.imageAnime(15, e) }}><img className={this.state.image15 ? "animIn" : ""} src={this.state.picture[15]} /></div>
                            </div>
                        </div>
                        <div id="other">
                            <Score2 score1={this.state.score1} score2={this.state.score2} turn={this.state.turn} />
                            <Button />
                            <WinPlayer2 player='Player 1 et Player 2 sont à Egalité' />
                        </div>
                    </div>
                );
            }
        } else {
            return (
                <div id='table'>
                    <div id='game'>
                        <div className="line" >
                            <div className="card" onClick={(e) => { this.imageAnime(0, e) }}><img className={this.state.image0 ? "animIn" : ""} src={this.state.picture[0]} /></div>
                            <div className="card" onClick={(e) => { this.imageAnime(1, e) }}><img className={this.state.image1 ? "animIn" : ""} src={this.state.picture[1]} /></div>
                            <div className="card" onClick={(e) => { this.imageAnime(2, e) }}><img className={this.state.image2 ? "animIn" : ""} src={this.state.picture[2]} /></div>
                            <div className="card" onClick={(e) => { this.imageAnime(3, e) }}><img className={this.state.image3 ? "animIn" : ""} src={this.state.picture[3]} /></div>
                        </div>
                        <div className="line">
                            <div className="card" onClick={(e) => { this.imageAnime(4, e) }}><img className={this.state.image4 ? "animIn" : ""} src={this.state.picture[4]} /></div>
                            <div className="card" onClick={(e) => { this.imageAnime(5, e) }}><img className={this.state.image5 ? "animIn" : ""} src={this.state.picture[5]} /></div>
                            <div className="card" onClick={(e) => { this.imageAnime(6, e) }}><img className={this.state.image6 ? "animIn" : ""} src={this.state.picture[6]} /></div>
                            <div className="card" onClick={(e) => { this.imageAnime(7, e) }}><img className={this.state.image7 ? "animIn" : ""} src={this.state.picture[7]} /></div>
                        </div>
                        <div className="line">
                            <div className="card" onClick={(e) => { this.imageAnime(8, e) }}><img className={this.state.image8 ? "animIn" : ""} src={this.state.picture[8]} /></div>
                            <div className="card" onClick={(e) => { this.imageAnime(9, e) }}><img className={this.state.image9 ? "animIn" : ""} src={this.state.picture[9]} /></div>
                            <div className="card" onClick={(e) => { this.imageAnime(10, e) }}><img className={this.state.image10 ? "animIn" : ""} src={this.state.picture[10]} /></div>
                            <div className="card" onClick={(e) => { this.imageAnime(11, e) }}><img className={this.state.image11 ? "animIn" : ""} src={this.state.picture[11]} /></div>
                        </div>
                        <div className="line">
                            <div className="card" onClick={(e) => { this.imageAnime(12, e) }}><img className={this.state.image12 ? "animIn" : ""} src={this.state.picture[12]} /></div>
                            <div className="card" onClick={(e) => { this.imageAnime(13, e) }}><img className={this.state.image13 ? "animIn" : ""} src={this.state.picture[13]} /></div>
                            <div className="card" onClick={(e) => { this.imageAnime(14, e) }}><img className={this.state.image14 ? "animIn" : ""} src={this.state.picture[14]} /></div>
                            <div className="card" onClick={(e) => { this.imageAnime(15, e) }}><img className={this.state.image15 ? "animIn" : ""} src={this.state.picture[15]} /></div>
                        </div>
                    </div>
                    <div id="other">
                        <Score2 score1={this.state.score1} score2={this.state.score2} turn={this.state.turn} />
                        <Button />
                    </div>
                </div>
            );
        }
    }
}


export default Game2;