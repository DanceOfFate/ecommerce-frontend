import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar as filledStar , faStarHalfAlt} from "@fortawesome/free-solid-svg-icons";
import {faStar as regStar} from '@fortawesome/free-regular-svg-icons'


const Rating = ({value, text, color}) => {
    return (
        <div className="rating">
            <span>
                <FontAwesomeIcon style={{ color }} icon={
                    value >= 1 ?
                        filledStar
                        : value >= 0.5 ? faStarHalfAlt :
                        regStar
                } />
            </span>
            <span>
                <FontAwesomeIcon style={{ color }} icon={
                    value >= 2 ?
                        filledStar
                        : value >= 1.5 ? faStarHalfAlt :
                        regStar
                } />
            </span>
            <span>
                <FontAwesomeIcon style={{ color }} icon={
                    value >= 3 ?
                        filledStar
                        : value >= 2.5 ? faStarHalfAlt :
                        regStar
                } />
            </span>
            <span>
                <FontAwesomeIcon style={{ color }} icon={
                    value >= 4 ?
                        filledStar
                        : value >= 3.5 ? faStarHalfAlt :
                        regStar
                } />
            </span>
            <span>
                <FontAwesomeIcon style={{ color }} icon={
                    value >= 5 ?
                        filledStar
                        : value >= 4.5 ? faStarHalfAlt :
                        regStar
                } />
            </span>
            <span>
                {text && text}
            </span>
        </div>
    )
}

export default Rating

