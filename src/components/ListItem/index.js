import './index.css'
import {RiDeleteBin7Line} from 'react-icons/ri'

const ListItem = props => {
  const {listDetails, itemDeleted} = props
  const {id, imageUrl, name, genre, duration} = listDetails

  const deleteItem = () => {
    itemDeleted(id)
  }

  return (
    <li className="list-item">
      <div className="list-left">
        <img src={imageUrl} alt="track" className="singerImage" />
        <div className="left-heading">
          <p className="list-heading">{name}</p>
          <p className="list-para">{genre}</p>
        </div>
      </div>
      <div className="list-right">
        <p className="list-heading">{duration}</p>
        <button
          type="button"
          className="delete-btn"
          onClick={deleteItem}
          data-testid="delete"
        >
          <RiDeleteBin7Line className="delete-icon" />
        </button>
      </div>
    </li>
  )
}

export default ListItem
