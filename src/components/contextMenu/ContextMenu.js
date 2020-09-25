import React,{useState,useEffect} from 'react'
import './ContextMenu.css'

const menuItems = [
    {text:'All Loads',
     onClick:() => { console.log('All loads')}
    },
    {text:'Dry Loads',
     onClick:() => { console.log('Dry Loads')}
    },
    {text: 'Wet Loads',
     onClick:() => { console.log('Wet Loads')}
    }
]

const  ContextMenu = ({parentRef}) => {
    const [isVisible, setVisibility] = useState(false)
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    useEffect(() => {
        const parent = parentRef.current;
        if (!parent) {
            return;
        }
        const showMenu = (e) => {
            e.preventDefault();
            setVisibility(true)
            setX(e.clientX)
            setY(e.clientY)
        }

        const closeMenu = () => {
            setVisibility(false)
        }
        parent.addEventListener('contextmenu', showMenu)
        window.addEventListener('click', closeMenu)
        return () => {
            parent.removeEventListener('contextmenu', showMenu)
            window.removeEventListener('click', closeMenu)

        }
    })

    const STYLE = {
        top: y,
        left: x
    }
    return isVisible ? (
        <div className="context-menu" style={STYLE}>
            {menuItems.map((item, index) => {
                return (
                    <div
                        key={index}
                        onClick={item.onClick}
                        className="context-menu__item"
                        >
                        {item.text}
                    </div>
                )
            })}
        </div>
    ) : null
}

export default ContextMenu