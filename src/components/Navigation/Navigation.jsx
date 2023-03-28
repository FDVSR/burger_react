import style from "./Navigation.module.css";
import {Container} from "../Container/Container";
import classNames from "classnames"
import {useDispatch, useSelector} from "react-redux";
import {categoryRequestAsync, changeCategory} from "../../store/category/categorySlice.js";
import {useEffect} from "react";


export const Navigation = () => {
    const { category, activeCategory } = useSelector((state) => state.category)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(categoryRequestAsync('max'));
    }, [])

    return(
        <nav className={style.navigation}>
            <Container className={style.container}>
                <ul className={style.list}>
                    {category.map((item,i) =>
                            <li className={style.item}>
                                <button
                                    className={classNames(
                                        style.button,
                                        activeCategory === i ? style.button_active : '')}
                                    style={{ backgroundImage:`url(${item.image})`}}
                                    onClick={() => {
                                            dispatch(changeCategory({indexCategory: i}))
                                    }}
                                >
                                {item.rus}
                                </button>
                            </li>
                    )}
                </ul>
            </Container>
        </nav>
    )
}