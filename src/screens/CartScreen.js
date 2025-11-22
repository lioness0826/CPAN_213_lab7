/** 
 * Cart Screen 
 * Displays shopping cart with items and total 
 */ 
 
import React from 'react'; 
import { 
  View, 
  Text, 
  FlatList, 
  StyleSheet, 
  TouchableOpacity, 
} from 'react-native'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { 
  selectCartItems, 
  selectCartTotalAmount, 
  selectIsCartEmpty, 
  clearCart, 
} from '../store/cartSlice'; 
import CartItem from '../components/CartItem'; 
 
const CartScreen = ({ navigation }) => { 
  // ======================================================================== 
  // REDUX HOOKS 
  // ======================================================================== 
  const dispatch = useDispatch(); 
  const cartItems = useSelector(selectCartItems); 
  const totalAmount = useSelector(selectCartTotalAmount); 
  const isEmpty = useSelector(selectIsCartEmpty); 
   
  // ======================================================================== 
  // EVENT HANDLERS 
  // ======================================================================== 
  const handleClearCart = () => { 
    dispatch(clearCart()); 
  }; 
   
  const handleCheckout = () => { 
    // In a real app, this would navigate to checkout 
    alert('Checkout functionality would be implemented here'); 
  }; 
   
  // ======================================================================== 
  // RENDER EMPTY CART 
  // ======================================================================== 
  if (isEmpty) { 
    return ( 
      <View style={styles.emptyContainer}> 
        <Text style={styles.emptyText}>Your cart is empty</Text> 
        <TouchableOpacity  
          style={styles.shopButton} 
          onPress={() => navigation.goBack()} 
        > 
          <Text style={styles.shopButtonText}>Start Shopping</Text> 
        </TouchableOpacity> 
      </View> 
    ); 
  } 
   
  // ======================================================================== 
  // RENDER CART WITH ITEMS 
  // ======================================================================== 
  return ( 
    <View style={styles.container}> 
      {/* Header */} 
      <View style={styles.header}> 
        <Text style={styles.headerTitle}>Shopping Cart</Text> 
        <TouchableOpacity onPress={handleClearCart}> 
          <Text style={styles.clearText}>Clear All</Text> 
        </TouchableOpacity> 
      </View> 
       
      {/* Cart Items List */} 
      <FlatList 
        data={cartItems} 
        keyExtractor={(item) => item.id.toString()} 
        renderItem={({ item }) => <CartItem item={item} />} 
        contentContainerStyle={styles.listContent} 
      /> 
       
      {/* Cart Summary / Footer */} 
      <View style={styles.footer}> 
        {/* Total Amount */} 
        <View style={styles.totalContainer}> 
          <Text style={styles.totalLabel}>Total:</Text> 
          <Text style={styles.totalAmount}> 
            ${totalAmount.toFixed(2)} 
          </Text> 
        </View> 
         
        {/* Checkout Button */} 
        <TouchableOpacity  
          style={styles.checkoutButton} 
          onPress={handleCheckout} 
        > 
          <Text style={styles.checkoutButtonText}> 
            Proceed to Checkout 
          </Text> 
        </TouchableOpacity> 
         
        {/* Continue Shopping Button */} 
        <TouchableOpacity  
          style={styles.continueButton} 
          onPress={() => navigation.goBack()} 
        > 
          <Text style={styles.continueButtonText}> 
            Continue Shopping 
          </Text> 
        </TouchableOpacity> 
      </View> 
    </View> 
  ); 
}; 
 
// ============================================================================ 
// STYLES 
// ============================================================================ 
const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    backgroundColor: '#f5f5f5', 
  }, 
  emptyContainer: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#f5f5f5', 
  }, 
  emptyText: { 
    fontSize: 18, 
    color: '#666', 
    marginBottom: 20, 
  }, 
  shopButton: { 
    backgroundColor: '#3498db', 
    paddingHorizontal: 24, 
    paddingVertical: 12, 
    borderRadius: 4, 
  }, 
  shopButtonText: { 
    color: 'white', 
    fontSize: 16, 
    fontWeight: '600', 
  }, 
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: 16, 
    backgroundColor: 'white', 
    borderBottomWidth: 1, 
    borderBottomColor: '#e0e0e0', 
  }, 
  headerTitle: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#333', 
  }, 
  clearText: { 
    color: '#e74c3c', 
    fontSize: 14, 
    fontWeight: '600', 
  }, 
  listContent: { 
    paddingVertical: 8, 
  }, 
  footer: { 
    backgroundColor: 'white', 
    padding: 16, 
    borderTopWidth: 1, 
    borderTopColor: '#e0e0e0', 
  }, 
  totalContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 16, 
  }, 
  totalLabel: { 
    fontSize: 20, 
    fontWeight: '600', 
    color: '#333', 
  }, 
  totalAmount: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#2ecc71', 
  }, 
  checkoutButton: { 
    backgroundColor: '#2ecc71', 
    paddingVertical: 14, 
    borderRadius: 4, 
    alignItems: 'center', 
    marginBottom: 12, 
  }, 
  checkoutButtonText: { 
    color: 'white', 
    fontSize: 16, 
    fontWeight: 'bold', 
  }, 
  continueButton: { 
    backgroundColor: '#3498db', 
    paddingVertical: 14, 
    borderRadius: 4, 
    alignItems: 'center', 
  }, 
  continueButtonText: { 
    color: 'white', 
    fontSize: 16, 
    fontWeight: '600', 
  }, 
}); 
 
export default CartScreen; 