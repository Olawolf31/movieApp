import { React, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

const Movie = ({ movies }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const posterURL = "https://image.tmdb.org/t/p/w500"

    return (
        <div>
            <div className="hover-img">
                <img src={`${posterURL}${movies.poster_path}`} alt={movies.title}
                />

                <figcaption>
                    <h5>{movies.title}</h5>
                    
                    <Button variant="light" onClick={handleShow}>
                        View Details
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{movies.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="inner-details">
                                <img src={`${posterURL}${movies.poster_path}`} alt={movies.title}
                                className="inner-details-img"/>
                                
                                <span style={{margin: "10px", fontSize: "14px"}}> {movies.overview}
                                <br/><br/><b>RELEASE DATE:</b> {movies.release_date}
                                <br/><b>IMDB:</b> {movies.vote_average}
                                </span>
                             
                            </div>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </figcaption>
            </div>


        </div>
    )
}

export default Movie


