import { ScrollView, View } from 'react-native';
import PromoItem from './PromoItem';

const PromoView = () => {
    const promos = [
        { id: 1, promo: 'Discount food' },
        { id: 2, promo: 'Buy 1 Get 1' },
        { id: 3, promo: 'Buy 2 get 1' },
        { id: 4, promo: 'Cashback 50%' },
        { id: 5, promo: 'Get 100rb, mac order' },
        { id: 6, promo: 'Discount Special Food' },
        { id: 7, promo: 'Discount Special Drink' },
        { id: 8, promo: 'Discount Special Food and Drink' },
        { id: 9, promo: 'Discount 30%' },
        { id: 10, promo: 'Discount 50% + 10%' },
        { id: 11, promo: 'Free Drink' },
    ];
    const renderPromoItem = () => {
        const promoItems = [];
        for (let i = 0; i < Math.ceil(promos.length / 2); i++) {
            let promo1Idx = i * 2;
            let promo2Idx = i * 2 + 1;
            if (promo2Idx === promos.length) {
                promo2Idx = null;
            }
            const p = (
                <View key={i}>
                    <PromoItem promo={promos[promo1Idx]} />
                    {promo2Idx && <PromoItem promo={promos[promo2Idx]} />}
                </View>
            );
            promoItems.push(p);
        }
        return promoItems;
    };

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {renderPromoItem()}
        </ScrollView>
    );
};

export default PromoView;
