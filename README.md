# WeatherApp
WeatherApp, kullanıcılara dünya genelindeki şehirlerin hava durumu bilgilerini gösteren bir mobil uygulamadır. React Native kullanılarak geliştirilmiş bu uygulama, kullanıcıların şehirleri aramalarına ve hava durumu tahminlerini görmelerine olanak tanır.


Bu proje, kullanıcı dostu bir hava durumu uygulamasıdır.

![Hava Durumu Uygulaması Ekranı](https://github.com/actjacob/WeatherApp/blob/master/Readme/weatherapplinkdn1.jpg)
![Şehir Arama Ekranı](https://github.com/actjacob/WeatherApp/blob/master/Readme/wearherapplinkdn.jpg)
![API'den gelen verilere göre forecast bölümündeki resimlerin dinamik olarak değişmesi](https://github.com/actjacob/WeatherApp/blob/master/Readme/forecast%C4%B1amagesap%C4%B1linkdn.jpg)




🌦️ React Native ile Hava Durumu Uygulaması Geliştirdim! 🌦️

Bu projede kullanıcı dostu bir arayüz, şehir arama özelliği ve günlük hava durumu tahminleri gibi detaylara odaklandım.

Öne Çıkan Özellikler:

Şehir Arama: Kullanıcılar herhangi bir şehir ismini girerek anında hava durumu bilgilerine ulaşabiliyor. 🌍
Son Ziyaret Edilen Şehir: En son görüntülenen şehir bilgilerini AsyncStorage ile kaydediyorum, böylece kullanıcı uygulamayı tekrar açtığında kaldığı yerden devam edebiliyor.
Animasyonlu Yükleme Ekranı: Veriler yüklenirken dairesel bir yükleme animasyonu sunarak kullanıcı deneyimini iyileştirdim.
Günlük ve Haftalık Tahminler: Kullanıcılar, sadece günlük değil haftalık tahminlere de ulaşabiliyor.
Yerelleştirme: Ülke ismini "Turkey" gibi yerelleştirerek görüntülüyorum ve kullanıcılara daha tanıdık bir deneyim sunuyorum.
## Özellikler

- **Hava Durumu Görüntüleme**: Kullanıcılar, şehirlerin hava durumu, sıcaklık, nem, rüzgar hızı gibi bilgilerini görebilirler.
- **Günlük Hava Durumu Tahminleri**: 7 günlük hava durumu tahminlerini gösterir.
- **Arama Özelliği**: Kullanıcılar, şehir adı girerek şehir araması yapabilir ve mevcut hava durumu bilgisini alabilir.
- **Geçmiş Şehirler**: Son arama yapılan şehir, uygulama yeniden açıldığında kullanıcıya gösterilir.


##**Teknolojiler ve Kütüphaneler**

- **React Native**: Mobil uygulama geliştirme için.
- **Expo**: React Native uygulamalarını hızlı bir şekilde geliştirmek için.
- **AsyncStorage**: Kullanıcının en son görüntülediği şehir bilgisini yerel depolama alanında saklamak için.
- **Weather API**: Hava durumu verisi sağlamak için.
- **react-native-progress**: Yükleme animasyonları için.
- **Lodash debounce: Arama** fonksiyonundaki gereksiz API çağrılarını engellemek için.

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


