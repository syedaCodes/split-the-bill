import Button from "./Button";

const Friend = ({ friend, onHandleSelect, selectedFriend }) => {
    const isSelected = selectedFriend?.id === friend.id;
    return (
        <li className={`friends-list-item ${isSelected ? "selected" : ""}`}>
            <div className="list-item-image">
                <img src={friend.image} alt={`picture of ${friend.name}`} />
            </div>
            <div className="list-item-text">
                <h3>{friend.name}</h3>

                {friend.balance < 0 && (
                    <p className="red">
                        You owe {friend.name} {Math.abs(friend.balance)}€
                    </p>
                )}

                {friend.balance > 0 && (
                    <p className="green">
                        {friend.name} owes you {Math.abs(friend.balance)}€
                    </p>
                )}

                {friend.balance === 0 && <p>You and {friend.name} are even</p>}
            </div>
            <Button onHandleClick={() => onHandleSelect(friend)}>
                {isSelected ? "Close" : "Select"}
            </Button>
        </li>
    );
};

export default Friend;
