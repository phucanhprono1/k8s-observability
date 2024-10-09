import {Component, OnInit} from '@angular/core';
import {CarLocation} from "../../common/car-location";
import {CarHomePageDto, CarService} from "../../services/car.service";

@Component({
  selector: 'app-car-location',
  templateUrl: './car-location.component.html',
  styleUrls: ['./car-location.component.css']
})
export class CarLocationComponent implements OnInit{

  locations: CarLocation[] = [

    {name: 'Hà Nội', image: 'https://vcdn1-dulich.vnecdn.net/2022/05/11/hoan-kiem-lake-7673-1613972680-1508-1652253984.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=2wB1cBTUcNKuk68nrG6LMQ'},

    {name: 'Hồ Chí Minh', image: 'https://image.baophapluat.vn/w800/Uploaded/2024/btmytazscgmz/2021_10_01/tp-hcm-2193.jpg'},

    {name: 'Đà Nẵng', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/B%E1%BB%9D_%C4%91%C3%B4ng_c%E1%BA%A7u_R%E1%BB%93ng.jpg/800px-B%E1%BB%9D_%C4%91%C3%B4ng_c%E1%BA%A7u_R%E1%BB%93ng.jpg'},

    {name: 'Nha Trang', image: 'https://static.vinwonders.com/production/nha-trang-o-dau-1.jpg'},

    {name: 'Đà Lạt', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBqxHZDbvrI5GrUIvxBu47lnzcdgfHm709mw&s'},

    {name: 'Quảng Ninh', image: 'https://static.vinwonders.com/production/quang-ninh-co-gi-choi-1.jpg'},

    {name: 'Vũng Tàu', image: 'https://locphatland.com/wp-content/uploads/2021/08/ba-ria-vung-tau.jpeg'},

    {name: 'Huế', image: 'https://ik.imagekit.io/tvlk/blog/2023/12/352521770_6922050131-1024x768.jpg?tr=dpr-2,w-675'},

    {name: 'Thanh Hóa', image: 'https://bcp.cdnchinhphu.vn/334894974524682240/2023/2/27/thanhphothanhhoa-16774897649251166490864.jpg'},

    {name: 'Quảng Bình', image: 'https://www.vietnambooking.com/wp-content/uploads/2018/08/dulich-quang-binh-kham-pha-vuong-quoc-cua-nhung-hang-dong-ki-bi-22-8-2018-1.jpg'},

    {name: 'Hà Nam', image: 'https://vcdn1-dulich.vnecdn.net/2022/05/12/hnamvietravel-1652345773-16523-1685-7071-1652345811.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Masnz4-G67Imri5TT0QjHw'},

    {name: 'Bắc Ninh', image: 'https://vcdn1-dulich.vnecdn.net/2022/05/12/hoi-lim-bac-ninh-2332-1652337260.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=6KiOUs80E_HBWuXvGyGJnQ'},

    {name: 'Bắc Giang', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Bac_giang_5.jpg/800px-Bac_giang_5.jpg'},

    {name: 'Lào Cai', image: 'data:image/jpeg;base64,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'},

    {name: 'Hà Giang', image: 'https://media-cdn-v2.laodong.vn/storage/newsportal/2023/8/26/1233704/2-69.jpg'},

    {name: 'Bắc Kạn', image: 'https://investvietnam.vn/uploads/02-Location/ProvincesCities/BacKan/Ba%20Be%20Lake.jpg'},

    {name: 'Lai Châu', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQklNZM16FrJN5MsHMhdE8SgJkxUkijoPF0A&s'},

    {name: 'Ninh Bình', image: 'https://vcdn1-dulich.vnecdn.net/2022/04/18/dulichNinhBinhVnExpress-165027-2285-9515-1650278117.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=EKON9JHNMuFD31A1AvzEYw'},

    {name: 'Điện Biên', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2rID8VIoDtnaGUM136cHrs8OwagvzkI2jxw&s'},

    {name: 'Hòa Bình', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrajsj4AMzcF2_ld6YfRZSRwNEj_KrpKnnpQ&s'},

    {name: 'Cao Bằng', image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGRobGBgXGR4dGBoaGR8dGBogGB0dIiggGx0lHhcaITEiJSkrLi4uGCAzODMsNygtLisBCgoKDg0OGxAQGy0lICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBQMGAAECB//EAEIQAAECBAQDBgUCBQMCBQUAAAECEQADITEEEkFRBWFxBhMigZGhMrHB0fBCUhQjYnLhB5LxM4IVFkOy4iSDk6LS/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAJxEAAgICAgICAgIDAQAAAAAAAAECEQMhEjFBUQQTIqFh8DKR4SP/2gAMAwEAAhEDEQA/ALTgsSiYAqWtKgdj52u8Le03aKXhfA2aYpLpGl2qfLaPNOG42ZLmBac2ZFQH8ClBv1PblfRqmCOJ8VXiM65jZnIOYJbKC7im1tbiogSyyqv2R5Djh3a/EJmjvCFIeqcgCgLFqu9DQ7xf5OOlKlJnZ0pQpgCogBzYEuz8njyLBstaqeFgKGlxdjX9RvcOaXIxeIWEJlpnCYlOpUMr1JJSKjZn+UTWWWN8XuzcqPVf42V4nW2W7ggbOl/iHMRxg+KSJpaXNQonQGp1oDW0eP4olCiSl1DdRID1tdmqDGYeYoArQvxAuSgEJZi9aGo6GL/ZLsyme0rRHGSKjwftykqCZrCWEJCSDmWVC5W51H5VouErGyVSxNE1GQ2U7DbWLKaaHTTOckclEEy8qg6VBQ3BBHtGFEMmZoGyxmWJimMywTUQ5Y3liQpjTQQUajkmOwmMywBjh40TEmWNiXAsxAqNAROURrJAsxEBHMxJ0gjLGimDZgQ84gXMg8y4hmYeCmBgWeNiZEycNEowUGwA2eCJVY6/g4JkyWgNmojEoR2iU+kThMC8X4mnDpBIJUfhSNW32FYHYbrs7xExEtOaYoJHPXkBcmEOK7TnMRKQnKLFTuebBmhRisUucrMupZtgA9gI7l4dqs/57Q1JdkJTb6Lbwzj0mZ8QMsuwFVD1ApFd49PCsSualmSQkBJfMEb9SHpsPOs8f4gU5kKABCQxCmCXIuSAx6F/SE3FeNugICyc1CdXFr+fVo4cnyJXxihlya2WCbx6UCQVMecZFAC1Kr3ZU+r3jIT/ANPZuA5w+HUQlRBltSxIUBonch2Z39o6WP5gQlVAnMFEMKBiAm5I2LP5xzJxyFHxFawaKILAUo6ClulTbWsbmS0rSVSwFhrAIAF7uKHmCCXgW72bwTz8UlKDlTl/roCSzWAG3NveFs7Ed45JUQGsQC4DOAY4xuc5c4ITZOqWFHBFCOYgjDplhikGgcnd/OKwhFLQpBh5alHKSVDclqchvWGXeJkqSQcr6VHh6jUU1esAIxuWYSlDFQpcMdG9/wAEEY7JMBJBTR0kjUfMHnDONsNs0J4y+IBtAio9my9H6wwRxEzZctKl0ljKApVEhyWDB9TWE+AUosEBJGrh35EX8onnItmBBHkNCDrvGnFS/Ew/4JxQSJqVAgJdwHZzYuLVc1rfeL/hO1chalBQVLAsVA25tT0ekeNgZSWIod3/AOYe4fHgIBWxqQ7NlptrE/zxNcdpjqVHsKMpAIIIIcEF3HKNzGSHUQBuY8fT2gmpWFy5imYpSyzajptyB8hFhX2smLlZZiTk8bzCVUIqxIBD1YdBvFllfHa2MpovqCFB0kER3kjzCV2sxJ8EhkglnCRmd7l33jpfaielTzJkxJFUCjZtQsN4hcsTyYQPvrTQOaPTckZ3cVTgPaghKzOUZoAGXKPGVGycrBVbuac4VYntViAlaFqDvmdJ8Q1CRkbVg1eZjS+SkumHki84uaJYc3L5U/qURokamK8jtDNMxu7CUBVQQc+Vhsb35RVZmLmFzNzBf7VlWYPUKBJzC2lLDeDjjDOUlQUSQyXPxMBukVSOgPWDDI5K6o12ehyWWkKSXBDjzjZlwj7P8QQhRlqBOY/GlyCXYEg+Kr35xajIikZWMAd3GGXHfFMUmTLMxQcDQM59YTYHtRLmTMqk5En9RIvz2HN/KM5JdmGolxhlRDjeMSJZIMxyCxCQVH2EQ4LjuHnPlmMxbxgp/wDc0D7IXVoIT3QEaJjnG4uVLKRMmJSV/C9j521iXuTDWgEeaMEdmUHbMAbs4f0gHi3EpWGBKyCr9r/M6ac6xnJLbMT46cUpGW5LPsBeKjj1qmrdVWoHqWv5wv7RdpJs9hJmJlAUCVAgkljVRfQNYPBMjiCRLBWrxihADF+m1uVYjH5eP30RyWwmRhq7c9+kD8Zx0tCCgVUdUkeEhrmyTVoX4/tKwZLJFaipHLmaafeKvOxISS2dy5SRVRNyQL8+u0c0/kSzahpAjCuyLiuIJDEeFRcqIubnxak15B4UTC4KmYOAOrWG9hWGGHzEZllSkmwAOlt2u3KIFygfAgMSS4JFNrml6vtDQSiqHJZM5ASAlLj+qaEnzTpGRPJ4K4GackHUByPUBjG4Vzh7CQJ4fNBZGbIpyAqlRoRvS9H5QzwWDnC8jMqxUWKRa4+EFtTXnEGE4rkSwSlNakFiehFTpqYPwmJVPcLWwvR6nXppDz5UYZ/+HSlPLUp1M9Aaf9xJA/Ogh/h5UoMuUpQVQFZS4/tIGlP8R3h8H3aSAmqqNMWHc7BIcWevpE8zCsgGXMQdZiQ4BarWGxqY5W3dWCgWZwOUshXeAPTKUmhGiSbUrWsKeKcNSP8AozCRYgqDs9Q4LERYsZPOVLOos7CpymxdNCKcmgSXiAD+sMHIUxS/Mnz9ItilLuwOkito4dOQcyQWF1C3veDZuF7018JA+N78qfSt4eIxCZhcoKbgkUJSRVhSn5SFuNwBQMwV3iWoRYNuHJbcGKfZb/IyFUzCqlkuoFrEah7ilYb8N4VNmoaWjOVk0DO4u3R3emkRrCFSqhIVQ6WpUACo8tIbdiytOJlmpABIUk0ZjdxztdzFH+SAIcVI7s93MlqQoMSTQKfZqNsQd4LxE9ZlJQFkgDxJoXBNPEKlmar6CLv/AKicKSsSZgdvEAOShnCSdPEkjk8LsBwOX3AJV/KWxlzgGVLVZSZlapdvcjYs4+g8aKavFhDMkANTUb3uC8FJxpmhCAklaixo7PQNc6vQDS+rHi3Z2ZKX3UwAEVBFQpJsR7xYuwHBZZ7yapIdLpS7jQ52qxOU/LeEShJ9bMo+BZwvFScFMnjE5pkxgEsDR2LlyGIADFN30gLi6vhnGZmmhaVP3ZSUgpdAJIYl+Zeu8Hdq+BKE1S0nvErCXIDNQXfQsa2obNDbiHC1pwCleE5+7SSliwSkg10Idj1I1h6G4+CnJnFa80x1KNyTe7bB+ftDnhUlkZSAQ7p30Hygfh2DUmSsZQcs1JfkoKBr1CYcYQOHD3sYKGSHXDVolTEqW53IbM93LuC7kGLmMZKUkKSsKBITTQncXEeflBI66w0xHCQJaci1d4sM5ICXFgdff5VCtDAXbHiQVMISpKkodISwNWZSudbF9KRUlTyouRpYNQCo/DvBGIkrIUFHKQrKUl81H36wHhgXAlpUS/iciiR7a/WkK3ptkpPZFOE5VUsABQqZ36pqCXsXiPvHSBMU6hQC4r6DyqPVonxKigPVSiosAQ9q08/eF6ZExwpaVMSACeeqh9hHKoRbukK2xlxLHYiYBnJISwDFIDMDQHrp6wGnjsyalMoLmKQmyAWAbobubs3KAOLzCCbuas7lr+Q1gbhmIQlCz+pw4I8I2rrax2jQxNrk/I3bG6McuUQpCmWkUUVusG4ereTaeq7iHEZqv+qolyGNXZ6hxrS3yjSJxULMl6FX25l6vHC8OkOtlKd3Cf28gWNuVHEU4rpma3ojmcQl7EAuD4lA8i5rzYNdoKTxgZUhPiGpUQS1GZ7sB1pCeaZf6Ug0JYOr1o4hnw7hiciZk1C3U7B8ttqOTW59DE5Y4KNtDJGp6VrVkQgNcFd2vQg2aJO8IDd8mU2oFW0ASTUUP40FYbs/MnElKFzspbKlJypFwCpwCWI08mjUzs/NCiETEhWZlBY7sJ/ScqnYqo1LjaGXFUjVYsxs8oNFZl6EOfkzNys8dDCpCRMmDMskFKQWA60cn6GohvM7CYui0jOn4glCkqodaKzAHLoDWAe0GGnSVJC5apbUSCks4APhJFaN/wAQ9egNUCTVTiSRKYbd2aRuIU8RW3xLPPOz+T0jIXg/4ASYjHKJCVpGUW36vBnB0ZpgIdk1pS25blCpRSQzVAYndoccIChKKvCRS5LpHs1PWKz0jBOOmKUoEggVajlqefQ/5jUnF5W8NC4vVy3xJsxtaIE4gAlIQXO3wk7sAPqKxqYguEoDlRAy9dxr1iS9MKQ/DqSlImMQ/hZjWzCxHIfWIpqlqSRnBy6VzOBVwKHT5VjuVIMuq0lLB1BJFt2YEW0O97R3MxclYLHOWcnVVHDgiv5tXJUCxMEoUlXdq8QcgEpfmQaVaJsHiFhGYfEnfYmoLNq/5ZLNnBC1JAYaUAO/5rBXekywwKq1IajbtFuKaFGs7hwnDOhQdzUW3Ys7F3rrFk/0/mSUvJKf5qwVEkDwlPwpTqSQHikYLGlCqAhTm+ouGo+kWbgLCbKWHSc6dXudtKw10NHsvnFCDhSpQfu1BTDqxHoTCHgWJlIEyWHXJmKatCkkCjWe9dcsW6ZgiqXNQw8SSG0t/wARUcNwJgtJcPlV5p2/NIdlBh2i4b3mGKLzJFUnUyzselOqYF7PyTLly6kZgptvFqedosMoEhL9C+yh9wIXYRSUju3T4HG9iw9oHmzUKcfPWZOUG8ti9/CqvqCYY8JUThFi4Vm9WB+kST8AlSM2tW5gwXw9GWUzeUYwq4bI/wDpplNR6uG+UDYbDM4a8NxLaXl525ws7VY7+EkqSljPUgl3/wCmFHKnL/UfEX0y84zdBA5vGwmYJcqTMnqSfEJYJY6CzaGpa2sc9t+JT5chCxLVKDp8Syl3U5oA5BG7axz2SWZcqTLB+IKUvmZhck7kIQpIO0JP9VOLqXMTKdwkILcyFEv/ALh6RJJtdg8Gp/HJ80SVrSiZ3xyoUfCpaksgszEJfUvrSD+y+DVPxC5C5S0MDny1ykaEkZfeotFfxOLP8ThE6S0ppo48T23j0PsnxBQoWClKmzFC2YlawDz8IT6DQQixb22BJDX/AMoYOVKKkoVNYn9Te9vSkQcClyJy/Bg1ICQzrlk6n9RcGw6R3wXtCF4lKRQqTm/pYNLLHma+cTYXji1qmFz4SBVwzvTyYRZQV6G0Uzt3wnDy1ibYKJC+7DVAzCqqWowGnKKepcpaSmXLSi1gakCpqSom+seldsXn4JYL5kpzhwx8Jry+Fx/zHlGEm5FEi+XbX8MTyp+BX7OppIFUuW1pd766WEd4Lhyps2WjMylMKuep8gLcoImYdJQ5JzKZg9BXlqOcNuyMhpxUr9IAbqdNqJL9YaMRKLVw3gWDw8xCEyitT5c5r4mClEg0f1AajVhb2/mpViJMpIyjKUv+0kpNhoAXbnBvD5q1zZSlAJcqV4S9CFEZiLlxW2lDFf7UEqxabNmKQ2tk/RvKGmk1Q/Kj0zs5hky5AlIUsqaiplS5qxbSrU25RQu2XDmnrSaZiFipopQ8WVmN3O3WwuHD+LBwG1YPszP0BGkVX/UyRMUuTMTQzEFxoMh/+Q9IlmjcNeBq0IcGvKlk4ggswIe55ludm9IZ4HiGdYl4hSZssqGaXOCVkB2dJU9jUBq84pC0zEzQGcDXK400PrDmWsTEkE/zGoXZjzApXlT5xyu47TEZ6OrsZgTUS5fkwHkAQ0ZFP4bwPGTpSZiJgyqFPGQaUYhwxBDRkd6la6Df8FK4dw1c12NB+MIeJwqkICQgKahO+vQsVEaxHKKZSnQtmBNL/TffeF6eIFSggaUDOFNrVNxUxzcpT66FeiXFYwAP3deYAB9BpbWC1cUUiUnQEUULgqu4BEAT++mkpCXIFaOTb3obR1iuzeISkKmkILUQpXiYVJArQel4rGNK2CjcjtCsWvu5HyPvDPDY7vWUGTMrVLDMQ1DuecKcLwgP4gojRrewLxZcCJQchBJNWBLaWAIYukdWiGbPBLQUiCViipRC5aFAs/hqRzc+8T4bBozgJQuUtRAGQ+EgnLZi1wWBiycLwaJyCvuiVJmJT4dlA1LuzEVfeHPDMDPlrIRLyC5KjToGv5xPHGc6a6Y7SoixPY6WhJUVLmFCHzFgCeVz+XityFSJa0lKDVSgoZlaW1vHoisTOyEKUFE0sGPKFs3hIVLzJQAspJbJL8Khu6bUjtUV4FojmcdyIBStdR+plW5kch6xmP4hMATlZykEuBrdh6xXRi5oWJM4oV4T/wCmkBKqsActWIFYn4fjFrSlSjXMEhtvw6QeTGLFwoKmoKZkxlg6Dw10La2g/FdnsqAsDNuBSm7/AEjrFYhEpSkoDOBYM3Vrl9Y4xHEWKQ67OrxEF3AAHKp/LPQQfFcKmfw6iMwISSEgF6WD7lttYoWMlTkGkxaa1DkH1j09cwjIxV4kufGQa7DXT1iVOHzBipbq1Ki4ZiwfffrEp4uTTs1CPs7wyYcOVzFFQDEPdhdj+axT+2IEwz1E18HkKsPcR6YcItMopKlKWBdzvRw5Fj7CAsRwmQCrMsuznatBR6s5bWkPx1SNRTez/DVBUpgSDKUSdqTAK/8A3B6RUu2OAKscpJrmmJFNrfWLLi5E2XOEiTjFuoABKiWdXiIf9qUAUNeesV2dxZUo5lr7wDLlULEuQCrM5bwPWtRbWDyNaoDj7M45w5RxaQhJUbJAv8NTy3rFt4bw2agpzJZIkMoE0CmLtWoryEJsTx+alEtZCQuef5SUpBmZHASrMQfiqKg0As8G4ftXiEEZ50tQWk+FYqHoy2YghrBq+kb74x7TBoYdlsIpM5Jf4Zc5JJq7TCoex8mgzguHWETMy3rUqAB8KSPNNRW8LcJ21y07lC3ocjsCaqua302hmeKjICJbKVcBXiS1PFQgDqfpBj8jGxkrJ1Ycrw5QXLoWCQ4NUn8+seNTZJSS9GePVsF2nlNkUiYMrucqi4qLkV9YreM4OmYs5FApVUOkhtWLhn+0F5Yy6CirS0uQGrSLn2K4aub3ywGtXQAPc8yXbWF6OAEG2UaHSLUVqk4VMqSUlQBK2UGzHfQtSKRaERFg+HzZE6WxBR3bFqOoVJA519YrGIwc1eJQMhop228RJb0i7o4pIlCWZhAX3ZAQkvU3BaiRzhZh+04JJIQkMQSlircNVyK2avvC5M+OLps3EUnGLlTZacqiAgUAuonMrMeRDQ3/ANQsMpeBQVDxImKLpNgSacukUfjHFVCYrLNJ8TjOEvSga9fQRNg+0JmDuVkZVXqoECv6i+VXRvaIfdKm2tGUvYlOIJluVVqz/c/lII4OlJU6nAABFmfYgNvcHaJcRgBmUiWgEjQKCgRVmdi9v3QXJ4epOULUQPC+QpUUDUMCxNwKxFyTVIUtfCu13cyky04dwl2IIrUl/eMgOV2vXJHdSC0pFE5kKKjuVESyCSXJY6xkXSaVX+hrKIrBLqUDMVXCasOe8XTB9nUYeVL7tIXiJosmoBIc3NAl96ltoBTKlzJ8uXJQUywAHJuXLrWoMCbeHkw5+j8P4fLkBKJaHdXiOp1JJ5AW6CNgcm2n0bjrYJwPgMjDpFUqmEOtR+LQi9g+1GaFfbHCsMxGY91Nbc5igU9SPKJcXx0SVza+LKFBxQBw7c8pBtaOuN4iXPkSZ6f0KyLDMGNQP9ze8dE3aaQTzQLOXMkjoCXA22/4iZM+1fFUO/r9o5mYAmZMSGKUmlQAGfX31jmc6VUKC2r/ADI/Kx5jcW6E6PRf9NVAyprkuVVFGYMze8XuSgBOc2pRvp5xQ/8ATkgSOblzu53/AC8XNM5Qlk6UPoKx6mNJRSGDZkhMy9CCCSNa89LesD4wCWvNTKQwB35xLh5xLeIANXpC/jSPA4NUkGv5yh0qMin4hATilIbMlYoL3rraoeJeEyXUhFfjHLUP8o7mymxOcahvN4Z8KkNMBPMwqRh0mTL7wlQdRryAEZxujFNGFDe5gRCyZoI5lvzpEeNxClrANiodKEfaGsZHfFw6/jCQkITW3P1IHpDfATx/L5po96g/f2ijdoscTMKU/uH1P1htw7FH+UXLggt0d/KBZrLPw7EiagEiuU1/tb7n0ip8VxBPeXIJQi2596fPWLBwVeVE0bFYvsoiKemYFhXi/wDVHSjnxaGob0jNgbKbOxCpmMWsH4VFuTJSD8vaEHDeGmeuRJLnPNALaDU+Qc+UWEKCFzlHQr86FzBnZCR/MMywRKmK6FTIHzMcqlcqFTFvF8bmxyJgDJRKUpI/anKUpAGnxA/jwHLSVYjKFKCVqSZjUJCitSi+nhST1MH8QnBU2aWr3QCS26mNdvAYCUkJmLIqyEv/APjYe8z3gt3pmPQ+znZbCzpQUJKWTQk/Ec4dan0VoCSSNIt/CuC4YIATLQlJIbKC9H+JRqdvvFa7KqVKwEpyypgJ8jQdR94sAWUylEfpSpug8P0joUV3Q6YBjcTJRNRLQyipYDKDpObN8WtMhIL6QwkzJJmKRkSAlQD0AJsaAUD77RSeDJmK4jmWgsl2UbHKgJcecwwdwTArOeZMUQhSpihmd6qoNxa4OsBdgss8zBSxNQkJS6gbABlAZr2s48oHl4aVmUh2Uzu4OoFG3eHEyWGQpmJd93YEfWFf8N3ksTEJ8SkJBblVobQQDiPZ8TpaUzMpUxBWCHY2KcwoRSmsefcd7EqkqouZlpWiiXchqAA0Y/3PHoPE1rQBmSRUNQs2tumsCdosZSUtSykKISW5Vvo9RzpAcEwHj/EJndzClaVvVySSpIszvT5x1w3h+VKlOHLFNapYv0JIBudYddqOGInYlac/ilqZRs4LkEUY1powaAMfw4S5b5iQA3xAjZ6AitbtcRyZKjpMSqCeEmWkjJmKnzVbomgfLe500iHic1cw5xOSEgsp3YNozFL1Dsbm7xBOxPdS0ICCVkF2FgzVVuTW2m1IreJxZKwVJBCQwB5e8Sx47fILQ3mcWYkfyabyw8ZA2FnSwkOgE9U/WsZFaFouXZzEZcTKkzwG7zKXOrs1bh29Y9K4lLUUkIOVRq7OHKq9H3jyvtEucoYbF5QMwSlak5T/ADEKoVNqoNQ1pFi4txpfdzFkkAUIFgSqUQ/LwK5+I7RXDDgmijkVPiq1HETwskEJKTyyoT7RYuEzHwSwXpMSskWufqPcQp47PMyZnlhyEFNnJGUX31h72dwM44aaghXiOaoOlx02bnG2noUr8+XnWU1qEkbAsHPmXjmZw3Kiuu1rw+wfZyeVE5GdqkgQ/wAJ2NCg86agcntHG8GSUtaDoj7EYQy8OeZPSkW2WP5Xp6RvhnDJEtASJmYe0OMMZCQzj1pHpQ0kgiuXIJD7ChjvFyXSXG3m0NETpZLJIppG84Y6w1gKNNwyisHKR1hhg5BBJ5GHGI4jLaqWPnAX/jAHwikC0awBCfG7Ut7iBUoUZqQxY1horih0HoRHKeKnUqHMN9AGgNoFlamSjmUoh/FtDfh+GJSg1/x+GDf4nNZalH+oxInjS0hmT6VgWjWEScMpInuCxU/VyD94qeFwp7spKSHWSWZjQkA8vtFr/wDM6mPhf894WYvtKrRKQdm+9IzkgOSPNEyykzqaL0MOOzElSsNOUwJXlRT/ALnoaWN4sicRmzKmpASRslz7EAeUSSMRhu7MtEldbsRU20A+UJ+N2KpI8+4hhiDNUQDmyF3NPjp6wZh+BGbiFgC4AOptLfKOVaxepvApa0ssd0ktVa20oGIu0MuG4CVJSooWlTkutJCsoArWtto3G2VVUbwnCiqXKQgOJaUjS6Q9fMRLxLDzEyCMozEAcuZ1394qXantfMASmRmloQsuaupgFCreJyelL3i19lAlcqcgTAfHmZ3yFQCiC92U/k0OsicuI3HViDs4hZxCyoNlChUVAJDMegeC8RmFBYNlG416Xhjh8EZOcKPiY2LvzhViEro1/reGFLLIW8qXuCB7EGOMFOElEuWnkOf4zRvhstXdBJckEHleFqUviASXIJpt09IyMMMRxAqzBxlKmOZmADu0VTtIE9zMPiCUqStksxCC7WLA84mWFd2SA+ZR1+EE5TBmHlgpKVgFOXUBjv11gmPJe1GPSufnl0K0BSrU08rAt13hRh+ITHCXIT4QSC1PkNAekehyxKxalqVLQFS2CSUgn4strMGTvFU7ScPeataB4EgO2wCQFUDMSQC1ukcuXHqwNCjEcXklRSM6y9FEJFeTNfeFq5AXUE5a1+cRHAlYJCWAuT9IJklKHynL9/KmvvCKKitAoH/hE7H0MZHK8Qkn4wOTkfSMhvyNR65wUSxhDIxJzAqBSHy1AFiqtW2e8HKnYNEtQ7hGU5ScyioeH4aBnbkNIrU+dhEZmnZ1KLnICasEu3wggAMAz+bhcmbLylIlrWkl2KNAXuWY2qIRfIa1Q/HzJotg7UoFJJS4ZgEgAAtWmjakxJhe1C5jpE4/qGUKH6Wc+GjDML7iKcmV4UDuVEJLspQAcEF1FIJ/SA1obcICkBQQmUnOorUSkqLlhQ+ENTURnkbfYs3iS73/AHx/0dq4ksXWev8AmBl8QKq5lE7uWfnESmBOc94ol/hTQWajD1JiCbNKRQAm1QPuA8LKb9nnSk7HGCnKIq/Nj69RB8iYR+4+dIUcPLu2+3PZ6Fi14bgsLN6+usVhK0WxydB8viMwfCphsL+saOMmXJLwEB19C3yEbdoopFeROcWT8TnzjRW+kQFiY7QYNmslCo0pMaEYpR0jBMCGghK6QLnMdhcAFhYkgt+D5wAos4CRqHG4icTsp18oinYlKqFPprfa/wDiMwNoEKVsSxU2yfK9ohRPmgGjD+qn1hyhRmBQzllNler8nZmpaA8bhjVwCkNXR/P6axNoHHyV7i2GmzUJC1J8KgoAgkWIqAC4qa3+p3ZiWqQZgCnzpyqQAyAol8yRRjRrD76MhIPwgOaZSRl6kFvcwdhVpBygg87/ADiSh+XKy0c2qFmJwCp02qZgCQzAAhwMoOUghyOWmgpG08cXgJ4Qc6goPkUlKRU0FA5drm1IfHEE0BV/uI6bQt4zwvviHNANgaj884aUXFXF7KfYmAyOKTl4gTpi0lzRIqB/T0+8enScNIUEqa4BcGnlrHnXDeEhAFcxFswHyAi5cHzoQrvVgimVJo31hsDkv8ja8FhlGWA3zMCjASyokOCd0lvysUPG8XxUtc3KsEKLpzIKslyMraW0gzA9o5+RInS85JYrlsA1wcqi4uxF6Q8fkRcuOxuLqyxzuAZUkJUmpJc0v9Y4k8IKUgEh9CTVoRp4uSTVSGJYHxAjejEdImlcUeilBuT3+cU+xE+RXeM4JWBQtSVJUZq6cgDmL+ZEVrvs4my1lKRMAC0B7Zgp07lxqbaRcu1GCmTwO6VLCUuWU7PTXan5aPLOKcOxKZigoEqSfEqWQr/npHFmc3Nu6Qwz7R4OXkQjDpKUywQHAK5ilUJUR5MG33hZheCqSMyihRGjgsfw7CB5ZxKlCWyswBDEMo8moR+GJsNhcQfECggFnUsAJe4UB4no1BrE25VTkjOLGv8AEyxe/wDetPsAw8veMgGetIUXmywdRm1Nafy41EvqXt/s1jzDyUgEAF2LpNfSwMGy2CR4R5v6Nv5wswiyogOR5k9WoYMVmDOaEs5De9OXpDqR5fNm5SHbVWgYWvYfl46mFr6xzMXsX6e9YgnktRwG1NPzrAbBZIcQqgBUHuAT9zHchIBYTgAehPTc+XKF5SlnUog9N+hEblTgzJUoh7s33OnK0Jy2LZbMICBVWYP8RSQfOt4JMxT/ABJI2ND9doR8MkTVeIzmGxLne76Q7ky5aR4lk81KJjsxttF4PRNLWQz6jb8JjU2blBJCqOaB6Dp8uUaxOLw6UuZiVH9od+tQIriOILnzJwRKWkICQlwlBNFEOauLmxoqKt0dMMbl0P8A+JSLn5n5RLh56VfCQRyMUmZxjuiUzFJJQwUUu2YgEhOZibx0jjMnMGdyFKKkj9qSulnLD3EPaqw/TkUqovZVGKMLcMtgCJpUBcUUbf0h3B2g0q0+sBSTFlFx7JSrakdoVS/r94GB/DHWZ9oNiWdTDtEPfEVB9j70pEim3A6fWOO8S1S7bD/MAVsZYSalcvK4QSqhLuD0IdtPpHc+TPWvKpbJ1UovvRmuzMKQnM+WbMVaEnXmPl0juXi1p/VmcWa2xHioeca/YymumQYrhqkuohy9CAw/2k8ucD4JBSCfEVGxXo1badGicF15syy51Y00fWgo59rQ7mSkpkBSksrRQDP/AHGohONuwRSYHJDs4/yekTqEDomB7ef+YkWsn6fl4dFEyJwDQjyvEmeB16uD7n0cRElYJLXELZuVBjAvGkJADCIM1NT0/wARvNoYHkPM7mJgSYpth7RMZmjiA5qhVw40I/PpAkxGwr+PI8OTMk3yjy+vKE3GuDhZRNSQEgF0Fyk82fM94ydPym5TXlo17GJEcXtmSSNwwPnSOaeRNUxo5KYvRiykEKksmzJZuVw4rYQDxCUiavMnOhTMXLggWcM3K0PsbggplJmPTMEq0PkTz08oU4iRMB8QL8/vHDKHB2ir+TN6YkXwsPUJ9D//AEIyGpDX+kZB++Yn3siw2MYEOoDYubeg1eOxOCrEdVM/N2r0rEEuVSoOtQinlY35RKmWtnyAA06nqS4MWtnnWbUk/uf86xolgWDnewFY6TiCBZBJ2BJp7RyZ5WC9QK/GAAeSWYW684NmB5k1v6TqS1t7V9Y7RJUblQBNKX6A36wOJoc6E61f/wB1OrGNiWPiAL83UfPwgQtCjjAOlJy2Bq6ks46CpAbzhhJxSwHSxGtQB1cgWPzhVhcItTGYohBAbK1+b0+sMZvC9phAo70JbcsflHTjtDqyPiODKlImCYqWoEspNDrQ3BD8mrAZ45iEAoXLTOSCHUkMrk4sfJrWh7Kw5du8AJb4AluQBIvzAF7QNisKMqrqJ1Jc0/qPzisoKS2dWLNPH0yvyZyZxKk5VhjmQsVdm8Qd1Cp+J6gUiCbh0JUqQE5ylAOZyk0olKhlCd6jd+cCY/hakrzAhJ0IUxB63FIlwnGp6CywJoOpovyOvmDEKcXr/R6WP5kZL8tD2XikIQuVLRMSpMsLAWoDKoOyHFS6kmrsR5wy4ZxlB7qWRlWUANYBQSksOTE+jbtVZ3FZCyf5eITMUsl0hIUkq8KmVUlgTTmRRy7Ph+DSrJ3aEoZLCYpOadqxJNje73aOmoxdx8i5fkRnCpfr37X9otyZm4fyja+n51eA8DhzLlpQ6jlDAuST1Jv5xNlrUn0NvKKnluRLM2oPP7xEtZH6kn0JPRy0bXLB0H56n2jgpbT/APY5qVo4EBsVs0Zv9nOgr829GjqWVGjeVC46CNlf9KvUAep16RypQ/a5H7lCnqPvAMTykH+kE+QHreGy0pKUJJcJvkDl9y7Ob2hGlZrQfmzkfL1iYJN/m3zgplYyobpwktRZCidgoMTyD0fpEU+QlIbMp9lJbyLvWBJS8pcOerV/xBGI4gpZAXbZv8/eG0PyQFiFEGuv5+MYxwWN9ommnMPCKvdmp0s/+aQMQdmY3UWFOZhGKzM6hp0/zA68UrQB+bsTXVoIEpVWTvmLggNd2NusRqJBIbVhbQDm2sTdgIZeLdyQBy9o4xE100Tc6P7As+tnibQ5mLbfF10iOctIICqPbne1SXibbrYLFypKiSUkVYgB0kvUvz84GQL+FJALFlBKy24JI9BBmIbMFJL6MGBL0AI1D/mkanyJS1VWkEij1AKXcHw+bGlR0jmlCwg0gBSSoKUA7AAj/izWgvuRQpZVWOim6Ehj/jeBMVhciRmykKfKQlnINrhj1/zAa0Klm5HQmuosduf3iTXHTQR93AFkSyNCSx8xGoWhKDU31os++QxuByRqF6eIEslJV1fKD5B3+kTIMwAEIWbGoBD9Wf8AHET46XOFJypbVoCkerZT7nzgOXKlhRJzKH9icvK6uWtD5Rdo49hwlqIrlH9hD6agKJPvA8uWB+mYQaNkDf71AddPnBicuUhSUB6AzFhAbQMEPrsOsQ/wctIAdCW1zkvyAYEh/reGasNAiGDGv9xYDkSxVW1Q0TTsQgHKq36mWSfMVd3/AEveDEyakkg/1a5fYjqPO0TYdMpIYAClCGNLmpalqt63gxiagGRmUQpKcobw5zdrEJOgbXl5T/xTlvEoi5KQw2ATmTmalOesEIlpUyg6mYAlJPo4c02f77kyi+UEuAPGMoJ08IG3P3iiQUblrJP8ybmvmCkgcgAEKIG3iL7xMkJX4QBsa0pegZ25axJhyUhkldr0UTY1AIT7RMJoLJfMq5e4/DFkx0LsVwNKfhypJuzv5Br9TC6Xwcguyg9C4AccwlQpSHqpgBZOU/lXZqRtMthsG0DOflCuKvQb9AWGwSAClKUkmpIQcrDkpRb2vDCRQNSm2+1PzrGgHoT5ZiX9I7OgYADQWh0HkdOd/rGlTDz8g3zjgqP5+NGFRo/oVfSGsWzJq9yeZUmnq1IhSoCgUl/2hqHmHiUk8vX579I5UxuwPWAKcpFwF1qWBDD3t5UjaJjN8Xz+V42Mhb9Wxv8AKJpcsvTOAa6EFq0c09ukYKVmkMbpfqK+6rmJBLAshtQn3/T5Qyk4qUkUlusD4tm6Br6c7iFq1FSnWpzyFhpv60g1RSkkd98bFQrYRpcx/wBVeZjhKX382cj7Rwkhth7UgWZNnalkfbQkctYlRxBbMa9QPLkTziFKXBao5OI0qS13b82gWwpvwGysTmUVMxoFMSHelhRmpTaHOAwMnu1J0B+FRcJURoCPkTFZEt/3Ea0HsR5afeCsJOClVLAEUUQQdDmIf70FqiGjIpGXsh4nJ8XhSSGNGej8xUWq/S0LjJStKkoLHaxfoav+cod8TxmZ0pcAtUEpruD+o/IUMK1YUFnAttm994hkW9Cy70Cz8MSgFVFJpnoxfkXpoavQNoYyRLcMkqKgSCFKYirh0rNXcaX0dwZxlBdJUlVqEN5PUfSBJpKbZSA9iCQCNMwLAGrOBfd4mwGlYirTEJJJNSWO2XMH8I/bSut4GxuDTUm1Hq7Ag0IDsGFCdxaJsWVODmDkAKqGV4XCg1UkAc+ukRyZiiaElRBqPjFWcpI8VdBUvoYlLemaxf8Awo3Qf+4D2yn5xkZNnBJKXZtPAPYpcedYyI2LyC+H8NKySAGHxZiZnkQcqSfJucSTMQkP4iQH8WRIqCx50t6RqMjqapEOkZIQC6s6hZzWj1DszhzvGS8StSimUUqpVVQBzI8JPQ5vpGRkH0Y3NlzWDLBDUWUgu2qElinzPTRo5k0AAKKlmm1SdDodIyMgS0B6JgQr9Io2ZiXbQaUufODMPJFTl2cPRhUU2raly8ZGRRdhXZLId1OkUYADRxpQN7nnpHaVIDSxWjkaMLvVz5kxkZFEayRS0MRlsWYUrpaIVqSTlAA1N6/eNxkZhbMKhajx3maNRkZMxypZiFWJY31a2sZGRpNiyYVLwylArYsGuqlbUHSG+L4YEBKVJGfKFFTkhv2kaVeou2kajIojohBVYEqehIK23CAauQb6s35vAyceqjsQ7kWBNb6mr3jIyJyk0xJNpnX8UTV77BqRxLnpIoTGRka2CzoHMaE0r+CCu4A8Wps/1DxuMgxKxJESSR+kU2L12DsKDfWIZaECoSpWtVUfo/z3MZGQwz0QqxxzNlrZ1N5MQ+2zxGjGLOoSTdvFuzFgTuxa8ZGRJyYlsGGKkgs5XMYt4Wfo9h5wbIm5iySUm+X26NGRkTjJsKZzi1zAHWlKklmKg3RwCSDzGrU1gd3L5e7JIBLuHb9JHitVzGRkM+6CBYiUQFBGagzMSMqtaOHBpqGiSTh0sooJJd8360PXLlLJVa4ULDpGoyJpKxV/kdo4gkCszKauAZgAetAKCNxkZE7Cf//Z'},
  ];
  cars: CarHomePageDto[] = [];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.getSumOfCars();
  }

  getSumOfCars(): void {
    this.carService.getSumOfCar().subscribe(
      (res: CarHomePageDto[]) => {
        this.cars = res;
      },
      (err: any) => {
        console.error('Error fetching car data:', err);
      }
    );
  }

  getFilteredLocations(): CarLocation[] {
    return this.locations.filter(location =>
      this.cars.some(car => car.cityName.includes(location.name))
    );
  }

  getCarsCount(cityName: string): string {
    const car = this.cars.find(car => car.cityName.includes(cityName));
    if (!car) return '0';

    const count = car.sumOfCars;
    if (count <= 10) {
      return count.toString();
    } else {
      const roundedCount = Math.floor(count / 10) * 10;
      return `${roundedCount}+`;
    }
  }
}