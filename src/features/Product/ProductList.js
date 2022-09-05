import { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import AppBackground from '../../shared/components/AppBackground';
import HeaderPageLabel from '../../shared/components/HeaderPageLabel';
import MainContainer from '../../shared/components/MainContainer';
import { useTheme } from '../../shared/context/ThemeContext';
import { useDependency } from '../../shared/hook/UseDependency';
import Item from './components/ProductItem';

const ProductList = () => {
    const theme = useTheme();
    const { productService } = useDependency();
    const [products, setProducts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [page, setPage] = useState(1);
    const [isNext, setIsNext] = useState(true);

    let preOpenedRow;
    const row = [];
    useEffect(() => {
        onGetAllProduct();
    }, [page]);
    const onGetAllProduct = async () => {
        setIsFetching(true);
        try {
            const response = await productService.getAllProduct(page);
            if (page === 1) {
                setProducts([...response]);
            } else {
                setProducts((prevState) => [...prevState, ...response]);
            }
            setIsFetching(false);
            setIsNext(true);
        } catch (e) {
            console.log(e);
            setIsNext(false);
            setIsFetching(false);
        }
    };
    const onFetchMore = async () => {
        if (isNext) {
            setPage((prevState) => prevState + 1);
        } else {
            onGetAllProduct();
        }
    };

    const onRefresh = async () => {
        setPage(1);
    };

    const onDeleteItem = (index) => {
        console.log('Delete Item', products[index]);
    };
    const renderItem = ({ item,index }) => {
        return (
            <Item
                productName={item.productName}
                idx={index}
                onDelete={() => onDeleteItem(index)}
                refRow={refRows}
                closeRow={() => closeRow(index)}
            />
        );
    };

    const refRows = (index, ref) => {
        row[index] = ref;
    };

    const closeRow = (index) => {
        if (preOpenedRow && preOpenRow !== row[index]) {
            preOpenedRow.close;
        }
        preOpenedRow = row[index];
    };
    return (
        <MainContainer>
            <AppBackground>
                <View style={{ margin: theme.spacing.s }}>
                    <HeaderPageLabel text="Product" />
                    <FlatList
                        data={products}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        onRefresh={onRefresh}
                        refreshing={isFetching}
                        onEndReached={onFetchMore}
                    />
                </View>
            </AppBackground>
        </MainContainer>
    );
};
export default ProductList;
