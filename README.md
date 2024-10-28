# Hava Durumu Uygulaması

Bu proje, kullanıcı dostu bir hava durumu uygulamasıdır.

![Hava Durumu Uygulaması Ekranı](https://github.com/actjacob/WeatherApp/blob/master/Readme/weatherapplinkdn1.jpg)
![Şehir Arama Ekranı](https://github.com/actjacob/WeatherApp/blob/master/Readme/wearherapplinkdn.jpg)
![API'den gelen verilere göre forecast bölümündeki resimlerin dinamik olarak değişmesi](https://github.com/actjacob/WeatherApp/blob/master/Readme/forecast%C4%B1amagesap%C4%B1linkdn.jpg)

Kullanıcılar, şehir arayabilir ve 7 günlük hava tahminlerini görüntüleyebilir.

🌦️ React Native ile Hava Durumu Uygulaması Geliştirdim! 🌦️

Bu projede kullanıcı dostu bir arayüz, şehir arama özelliği ve günlük hava durumu tahminleri gibi detaylara odaklandım.

Öne Çıkan Özellikler:

Şehir Arama: Kullanıcılar herhangi bir şehir ismini girerek anında hava durumu bilgilerine ulaşabiliyor. 🌍
Son Ziyaret Edilen Şehir: En son görüntülenen şehir bilgilerini AsyncStorage ile kaydediyorum, böylece kullanıcı uygulamayı tekrar açtığında kaldığı yerden devam edebiliyor.
Animasyonlu Yükleme Ekranı: Veriler yüklenirken dairesel bir yükleme animasyonu sunarak kullanıcı deneyimini iyileştirdim.
Günlük ve Haftalık Tahminler: Kullanıcılar, sadece günlük değil haftalık tahminlere de ulaşabiliyor.
Yerelleştirme: Ülke ismini "Turkey" gibi yerelleştirerek görüntülüyorum ve kullanıcılara daha tanıdık bir deneyim sunuyorum.

Teknolojiler ve Kütüphaneler:

React Native: Ana framework.
AsyncStorage: Kullanıcı verilerini yerel olarak saklamak için.
react-native-progress: Yükleme animasyonları için.
Lodash debounce: Arama fonksiyonundaki gereksiz API çağrılarını engellemek için.

## Gerekli Kütüphaneler

Uygulamanızı çalıştırmak için aşağıdaki kütüphaneleri yüklemeniz gerekmektedir:

### 1. **React Native Core**
- React Native uygulamanızın temel yapı taşlarıdır.

### 2. **Axios veya Fetch**
- **Axios:** API isteklerini yapmak için yaygın olarak kullanılan bir kütüphanedir.
  npm install axios

### 3. **AsyncStorage**
-Kullanıcı verilerini (favori şehirler vb.) saklamak için kullanılabilir. Yeni React Native projelerinde @react-native-async-storage/async-storage kütüphanesini kullanmalısınız.
npm install @react-native-async-storage/async-storage

### 4. **Lodash**
-Debounce işlevselliği için kullanılan bir yardımcı kütüphanedir.Gereksiz api çağırılarının önüne geçer.
npm install lodash

### 5. **React Navigation**
-Uygulamanızda sayfalar arasında geçiş yapmak için kullanılır.
npm install @react-navigation/native
npm install @react-navigation/stack


npm install axios @react-native-async-storage/async-storage lodash @react-navigation/native @react-navigation/stack react-native-paper


