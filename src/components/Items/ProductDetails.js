import {  Input } from "reactstrap";
import { ProgressBar ,Form,Button,Col, Container,Row, Card} from "react-bootstrap";
import Header from "../Header";
import Zoom from "react-img-zoom";
import "./ProductDetails.css"
import { AiOutlineMinus } from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import ReactImageMagnify from 'react-image-magnify';
import watchImg1200 from '../../assets/watch.jpg'
import watchImg300 from '../../assets/watch300.jpg'
import React, { useEffect, useState } from "react";
import { ImageList, Slider } from "@mui/material";
import * as AiIcons from 'react-icons/ai';
import { CProgress, CProgressBar } from '@coreui/react'
import { Swiper, SwiperSlide } from "swiper/react";
import { QuantityPicker } from 'react-qty-picker';  
import { AiFillStar } from "react-icons/ai";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles.css"

import axios from "axios";


// import required modules
import { Pagination, Navigation } from "swiper";
import { CardImg, CardBody, CardTitle,CardSubtitle, CardText } from "reactstrap";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
import { Toast,ToastBody,ToastHeader } from "reactstrap";
 


import ProductRating from "./ProductRating";
import UserReviewRating from "./UserReviewRating";
import ComparisonProductInformation from "../ProductsComparison/ComparisonProductInformation";
import ProductSpecification from "./ProductSpecification";


// toast-configuration method,
 // it is compulsory method.
//  toast.configure()

function ProductDetails(){
  // let name = localStorage.getItem("Name")
  // var storedProduct = JSON.parse(localStorage.getItem("product"))
  // var id = storedProduct[0].id
  const [isReviewFetched,setIsReviewFetched] = useState(false);
  const [isPincodeFetched,setIsPincodeFetched] = useState(false);

  var productList = [
    {
      "modelNumber": "IPH123",
      "productName": "Apple iPhone 11 (64 GB, Green)",
      "productHighlights": "15.49 cm (6.1\") | Liquid Retina HD\n4GB RAM | 64GB ROM | iOS 14\nHexa-Core A13 Bionic Chip Processor\nDual Rear Camera | Single Front Camera\n3110 mAh Lithium Ion Battery\nProximity Sensor | Face ID",
      "productImage1": "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",
      
      
      "productPrice": "47,490",
      "productVideoLink": null,
      "category": "Mobiles",
      "subCategoryMap": {
          "Type":"Iphone"
      },
      "productInformation": {
          "General Features": {
              "MODEL NAME": "iPhone 11",
              "SKU": "MHDG3HN",
              "SIM SIZE": "Nano-SIM and eSIM",
              "BRAND": "Apple"
          },
          "Display": {
              "SIZE": "Nano + eSIM",
              "RESOLUTION": "828 x 1792 px, 326 PPI",
              "TYPE": "Liquid Retina HD LCD Display"
          }
      },
      "variants": {},
      "offerPrice": "45,490",
      "productVariants": []
  },
  {
    "modelNumber": "IPH123",
    "productName": "Apple iPhone 11 (64 GB, Green)",
    "productHighlights": "15.49 cm (6.1\") | Liquid Retina HD\n4GB RAM | 64GB ROM | iOS 14\nHexa-Core A13 Bionic Chip Processor\nDual Rear Camera | Single Front Camera\n3110 mAh Lithium Ion Battery\nProximity Sensor | Face ID",
    "productImage1": "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",
    
    
    "productPrice": "47,490",
    "productVideoLink": null,
    "category": "Mobiles",
    "subCategoryMap": {
        "Type":"Iphone"
    },
    "productInformation": {
        "General Features": {
            "MODEL NAME": "iPhone 11",
            "SKU": "MHDG3HN",
            "SIM SIZE": "Nano-SIM and eSIM",
            "BRAND": "Apple"
        },
        "Display": {
            "SIZE": "Nano + eSIM",
            "RESOLUTION": "828 x 1792 px, 326 PPI",
            "TYPE": "Liquid Retina HD LCD Display"
        }
    },
    "variants": {},
    "offerPrice": "45,490",
    "productVariants": []
},
{
  "modelNumber": "IPH123",
  "productName": "Apple iPhone 11 (64 GB, Green)",
  "productHighlights": "15.49 cm (6.1\") | Liquid Retina HD\n4GB RAM | 64GB ROM | iOS 14\nHexa-Core A13 Bionic Chip Processor\nDual Rear Camera | Single Front Camera\n3110 mAh Lithium Ion Battery\nProximity Sensor | Face ID",
  "productImage1": "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",
  
  
  "productPrice": "47,490",
  "productVideoLink": null,
  "category": "Mobiles",
  "subCategoryMap": {
      "Type":"Iphone"
  },
  "productInformation": {
      "General Features": {
          "MODEL NAME": "iPhone 11",
          "SKU": "MHDG3HN",
          "SIM SIZE": "Nano-SIM and eSIM",
          "BRAND": "Apple"
      },
      "Display": {
          "SIZE": "Nano + eSIM",
          "RESOLUTION": "828 x 1792 px, 326 PPI",
          "TYPE": "Liquid Retina HD LCD Display"
      }
  },
  "variants": {},
  "offerPrice": "45,490",
  "productVariants": []
},
{
  "modelNumber": "IPH123",
  "productName": "Apple iPhone 11 (64 GB, Green)",
  "productHighlights": "15.49 cm (6.1\") | Liquid Retina HD\n4GB RAM | 64GB ROM | iOS 14\nHexa-Core A13 Bionic Chip Processor\nDual Rear Camera | Single Front Camera\n3110 mAh Lithium Ion Battery\nProximity Sensor | Face ID",
  "productImage1": "/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAC2ALYDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooooAKKp32oJZhUCGWd/uRqcZ9yew96y21HUn5M1vCPRIi36kjP5UESqRjudBRXOfbdQ/5/k/78L/8VS/bNRPS9X/wHH/xVK5HtoHRUVzUmoahGpJvUAHrAP8AGuM8R/FWLw5cLb3GpRGYjPlLbgvjsT82F/E59qLlKrF6I9Yorwn/AIX9b+pPvsH+FL/wv229f/Hf/rUyr+R7rRXhf/C/bb+9/wCO/wD2NH/C/LX++P8Avj/7Ggd/I90orwv/AIX7bf3h/wB8/wD2NJ/wv22/vf8Ajv8A9agL+R7rRXhX/C/rb1/8d/8ArVf0z496VNdJFdFUVjjeykAfiOn5UBfyPZqKqafqNvqdotzbOGRgD1Bx37fzFW6BhRRRQAUUUUAFFFFABRRRQBzjyGWS6uTyzzGNf91TtA/PJ/GvEfFnxa1eDX7uw0K3thBaSGJ5povMaRgcHvhRnivbIsG3O0ED7RJ3/wBs14p4w+EmsTeI7rUNBltzb3khleOVipjYnJwQDkZyaFa+pyx5eZuR3Hw78bf8JfpRe4gSK7icxyqvTOMgj2I/LBrsllglkkjjdTJEcOF6qa4r4deB38I6cyTyiW5lcySuBgFsYwPYD165Nds21GB2AGT+ID731pEtJtuOxia/eNbWUjqAWCs2D0JAPH0yB+deV/DPwlZeJtR1bxJrcQvdl20MMc3KlhyzsO/UcHjrXpHiZh9ilBBJKtg56ciuR+EMrJ4TvVH/AEEpT/46lb4aHPUsZ1JOFFtHoa6Vo8ShRplgAOgFsn+FeQfEz4Z6lqviJtW8PWlu8M6KJbeMpEUdRjIBwCCAD9c163mRqcEau+WHhJWZwwxM4O8T5r/4VV40/wCgMf8AwIi/+Kp4+F3jQDH9iL/3+i/+Kr6T2GjYaz+qQ7m/1+r2R82j4XeNMOP7EHzf9N4uPp81SWfwi8YXN3HFNYR2sbHDTSzoVQeuAST+Ar6O2GkIYUfVIdxfX6vZDLHRNHs9PtrNdOs2WCJYg7WyZbaAMnjqcZrE8X/D7QvEmjXMaafbW18sZa3uYIgjBwMgHHUHoQfWt3cwpwnZQfpWjoK1kYxxEk73OL+A+sXE2kx2czllUsgBPQDJ/p/48a9rrwL4EkbuQSTNJjnp96vfa8o9xdQooooKCiiigAooooAKKKKAOYgOLUn/AKeJf/Rhrwrxd8TfEd14gu7TRphaWdpK0Q2RqzSFTgsxYHjOeBXukOHs2w3BnlwR/vmvKPFnwlk1LW59Q0q/htRdP5k0E6EqrnqyEdj1waI2v7xyJxUnc3fhl4xuvE+mSC9C/aYJPKkKjAbjIYDtkZyPUe9d8/IUkk7Puj0rkvBHhG28I6b9nWfzpnbzJZSMbmxjp2AAwB9fWus3Ag459hSJbV3y7HK+J8fZZOudrY/MVzPwcRT4SviRn/iZS/8AoKV03ibJtpMYICNk/iK5j4OyBfCd8Cf+YlL/AOgpXRhb+0M6rXsXfueifKP4aNw9Kb5i0eanrXpWODmiP4NG0etNEsfrTvMj9RS1DniGPekwKXenrRlPWgd0N2qfWmmFSDg9qk+X1o3KAfpTuwsmeY/Ar/WL/wBd5P8A2avf68A+BZAkXJA/fyf+zV7/AF4x7q6hRRRQUFFFFABRRRQAUUUUAcpYKE0yNVGAJZMD/gRqeobEg6dGQePNk/8AQjUtI8+W4tIx+U0UjHg0COV8SNi2mGD8yH+Yrzv4aakLLRLqKTcqvfylGIwGOFyAfWvQ/EgzbStn7qHj15FcZ8M9T0q08CahBqgieJtSlYpKBj7qc8967cvdq21zPEw58M1e2p16aojD74qYXyN/GPzrkLmawmctpC6lt7LHA06fgcZ/WjTYdY1Cd444mTZxiaJomY+wYf1r6L2dG13K3qfOTw+NT92zOyF0OxpwuKdZeF18tftGpXCS45XyQoB/HNXv+EchAwupTn6xqf6VxSrUE7J/gxKhjfL7ykLnmn/agO9MuvD110ttUjLHostuRn8Qf6VgS6P4qMj7LSMxL1mMu1fwBG4/lWlP2FTaaXrp+ZajjU7cv4o6H7ao/iqGfVI4o2ZnAAHUmuSgmikujb3XiC3hkBwyRISwP/AiP5V1+l6HogAmLvfSjkNcNuAPso4/MGqqwpUld3fojroqu379kcJ8DwG8vIz/AKSSPzNfQlfPvwQPKf8AXy38zX0FXzB9THdhRRRQUFFFFABRRRQAUUUUAcvbKsdnsRQqieUADoPnNOzTYv8Aj1/7bzf+hmjNI8+fxMXNNY/KaM00nigg5fxGSLeUcYKHP5iua+DWl6fN4avb6ezgkuU1GVRLIgYqoC9M8DrXS+Iv+PaT/cP9K5P4R2T3vhe8WSRjbrqUp8vsTheT604ya2HVny0G/M9Kl1qBPkt99ww4xH90f8C6flmq6LdXcwmnITHConQfj1NXoLKKMAKo49qtrDgcCk2cMVOr6EcMk0a4Dk/XmlZpH5LsfxpxeJTgyJn03Um9D03H6If8KNTpVJJWbK06zOuBIwI6HuKoG81S2+WUC7i/2vlb8xwfxFbO5f7r/wDfB/wpjGE/eOPqpFO7MZU5L4ZGSt3o14vkXVpBGW4MdzAuD+OMVBJ4RtY2MulXE2nvjIRDviP/AAE9PwIrWlsbS4BBMRz/ALQqqtpNpQL2r74By0BbIx/s+hq4YmdJ+67FU4ylpJHm/wAC0DOgcBsXDnkd/m5r6BrwD4FHMi/9d5P/AGavf6g9lbsKKKKCgooooAKKKKACiiigDlo/+PX/ALbzf+hmm5oX/j1/7bzf+hmm5pHnT+Jjs00nikzTSeKDO5z3iKMixkkPQqQB+Vc/8GH2eEb7mJf+JnLzI+P4U7V0fiN92lsP7oYVynwdQP4XvgDhhqMv8lo06mldJUNPI9O+0R45uifaGP8Aqc1G1zbjnyJJD6yv/wDrqPyPUk/U0v2cego5onCuZDv7TZBiOGJB7ZP+FIdVm/2f++P/AK9J5H+cUvkD1qeaPY0UqncBqk/qv/fH/wBepF1Sf+7GfwIqPyPpR5HsKOaPYTdTuT/2lu+/bo3/AAL/ABFQ3F3CYmP2ZRwf7tNMOO1QfZvtT4wfJX7x/vewppx6Ee+3ZHnPwK++v/XeT/2avf68A+Bf+sX/AK7yf+zV7/VHurqFFFFBQUUUUAFFFFABRRRQByf/AC6/9t5v/QzUeaeT/oo/67zf+hmos1J5tT4mLmmk8UZppPFBBzuvn/R5R/sH+lZfwVt0m8GXxbIYapNhh1HypWlrv+ol/wCubf0qr8DELeCr/t/xNJv/AEFKUtjsoQ54cp3ws5c4V1b6jFSCxm/iZPoCf8KtvIkC4JyT0A71UkuXfq21fRTj9a4a2Lp0ny7vsv60OiGXRlqNeAw/fKjPqabmP++PzoBHVVJ9wKXLf3G/SuCWZTvokvmbrLqa6ipGJW2oQT9am/s/1fH0FVz7xt+Waclw6HCSH/dPNaU8z6Tj9zv+Af2fT9Sb+z4h1Yv/AL3T9KCgAIwBgdBUsV0kh2sNrH8jT2VcHgdK9GlVhUjzQd0Q8Ko6LQ8V+Bf+tX/rvJ/7NXv9eAfAv/Wr/wBd5P8A2avf66zNbsKKKKBhRRRQAUUUUAFFFFAHIv8A8eo/67zf+hmoM1NJ/wAeq/8AXxN/6Gar5qTzanxMXNNJ4ozTSeKCDn9c/wBRL/1zb+lU/gjMIvA9/jlzqs2B/wABSret/wCol/65n+lZvwVUf8Ibfs5+UanNx6/KlcmOqypUXKO56eASb1PR/mcls9erGmGREPyjc3qajeVpm2rwo/Sm7kj4GWb0FfPxhpef9f5ntqHclMsjdTik3N/eNQl5j91FX/eOaTFx/fj/AO+a1TitkXyon3uOjUfaO0igj3qHM46+W35il80dJEK/XpSahLdCcEWQAwzGc/7JqzBcEjy3PsCf5Gsw7ojuU5X+VWVdZ0JGA+PzqIznh588P+HMpwujyj4F/wCtH/XeT/2avf68A+Bf+tX/AK7yf+zV7/X1h5C3YUUUUDCiiigAooooAKKKKAOPl/49F/6+Jv8A0M1WzVib/j0X/r4m/wDQzVXNSebU+Ji0h6UlIelBBga3/qZf+ubf0rG+DhJ8IXy5wv8AacxJ/wCApWxrX+pl/wCuZ/pWJ8H1L+Er0Zwv9pS59/lSuLHq9H5o9fK/iPQWnJ+SIYX17mkG/HHH4VIqhegp+K8bS+p7uhFuk9aXfJ6ilOKSr0FYQvJ6ik3SetLxTgBSdh2IxK8Z4HHdelSK4x5kZ47juKUqO4qNo9uWT05FZNXVgsjzf4Ff61f+u8n/ALNXv9eAfAr/AFi/9dpP/Zq9/r6pHz63YUUUUxhRRRQAUUUUAFFFFAHGz/8AHov/AF8Tf+hmqlXLrH2ZcAgfaJuv+8ap1J5lT4mFIelFIelBJg61/qZf+uZ/mKxvg5/yKV9/2Epv/QUrZ1jb9nuMg58o49uRWN8HP+RUvh/1Epf/AEFK4swdqDfmevlXxHoqilPSkBoJr5/mPd6jGpmKeaSrUihuKkWm04UnIGOxxTG6H6VJnimP90/SoUmmSjzP4Ff6xf8ArtJ/7NXv9eA/AjBfkE/vXxj/AIFXv1fXo+fW7CiiimMKKKKACiiigAooooA5bUbdo5bi3xz5huI/9pW+9j6H+lZVdtd2UN7EEmBypyjqcMh9Qe1Y8nh2bcSlzC+e8sOG/EqQD+VKxyVaDbvEwaQ1t/8ACO3X/PSz/wC/b/8AxVH/AAjtz/z0s/8Av2//AMVQZ+wmcZqcKyoyOdqOrIzY+6CCM/hnP4V5l4S8Wj4feINU0TXoZY7SefzlkRd3lMe+P4lIxyPQHvXvcvhWeYYaW0A9o3/+LrF1P4YQ6siJdy2cyx8IHt2yg/2WD5H0zj2rOrSjVg4T2Z04Z1KMrpGEPib4OIB/t2Hn1jk/+Jpf+FmeDv8AoOwf9+5P/iaur8FNIA/5Z/kf607/AIUvpH/TL/vmuD+yqXd/gej9fqfy/wBfeUP+Fl+Dv+g9B/37k/8AiaT/AIWX4O/6DsH/AH7k/wDia0f+FM6T/wBMv++KcPgzo+OTH+EYp/2XS7v8A+v1O39feZn/AAsvwd/0HYP+/cn/AMTS/wDCy/B3/Qdg/wC/cn/xNaB+DOk9vKx/uUf8KY0j/pl/3xR/ZdLu/wAA+v1O39feZ/8Awszwd/0HYP8Av3J/8TWB4r+Lmh22kXEGiXDX1/KhSNkjZUjyMbiWAzj0Fdb/AMKW0c/88/8Avmr2m/B/w9YXSXDRJI6HIymcH23Ej9Kccsoxld3YpY2o1ZIwfgf4budO0ZLu6jaMsN6qwwec4/PcT9Metew1Fb28VrCsUKBEHQD/ADyalr0jkSCiiigYUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAf/Z",
  
  
  "productPrice": "47,490",
  "productVideoLink": null,
  "category": "Mobiles",
  "subCategoryMap": {
      "Type":"Iphone"
  },
  "productInformation": {
      "General Features": {
          "MODEL NAME": "iPhone 11",
          "SKU": "MHDG3HN",
          "SIM SIZE": "Nano-SIM and eSIM",
          "BRAND": "Apple"
      },
      "Display": {
          "SIZE": "Nano + eSIM",
          "RESOLUTION": "828 x 1792 px, 326 PPI",
          "TYPE": "Liquid Retina HD LCD Display"
      }
  },
  "variants": {},
  "offerPrice": "45,490",
  "productVariants": []
},
{
  "modelNumber": "IPH123",
  "productName": "Apple iPhone 11 (64 GB, Green)",
  "productHighlights": "15.49 cm (6.1\") | Liquid Retina HD\n4GB RAM | 64GB ROM | iOS 14\nHexa-Core A13 Bionic Chip Processor\nDual Rear Camera | Single Front Camera\n3110 mAh Lithium Ion Battery\nProximity Sensor | Face ID",
  "productImage1": "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",
  
  
  "productPrice": "47,490",
  "productVideoLink": null,
  "category": "Mobiles",
  "subCategoryMap": {
      "Type":"Iphone"
  },
  "productInformation": {
      "General Features": {
          "MODEL NAME": "iPhone 11",
          "SKU": "MHDG3HN",
          "SIM SIZE": "Nano-SIM and eSIM",
          "BRAND": "Apple"
      },
      "Display": {
          "SIZE": "Nano + eSIM",
          "RESOLUTION": "828 x 1792 px, 326 PPI",
          "TYPE": "Liquid Retina HD LCD Display"
      }
  },
  "variants": {},
  "offerPrice": "45,490",
  "productVariants": []
},
{
  "modelNumber": "IPH123",
  "productName": "Apple iPhone 11 (64 GB, Green)",
  "productHighlights": "15.49 cm (6.1\") | Liquid Retina HD\n4GB RAM | 64GB ROM | iOS 14\nHexa-Core A13 Bionic Chip Processor\nDual Rear Camera | Single Front Camera\n3110 mAh Lithium Ion Battery\nProximity Sensor | Face ID",
  "productImage1": "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",
  
  
  "productPrice": "47,490",
  "productVideoLink": null,
  "category": "Mobiles",
  "subCategoryMap": {
      "Type":"Iphone"
  },
  "productInformation": {
      "General Features": {
          "MODEL NAME": "iPhone 11",
          "SKU": "MHDG3HN",
          "SIM SIZE": "Nano-SIM and eSIM",
          "BRAND": "Apple"
      },
      "Display": {
          "SIZE": "Nano + eSIM",
          "RESOLUTION": "828 x 1792 px, 326 PPI",
          "TYPE": "Liquid Retina HD LCD Display"
      }
  },
  "variants": {},
  "offerPrice": "45,490",
  "productVariants": []
}
  ]

  var quantity = 0;
  var flag = false;

  //var product = [];
  var productImg1;
  const [isProductFetched,setIsProductFetched]= useState(false);
  const [product,setProduct] = useState([]);
  const [Pincode, setPincode] = useState([]);
  const [review,setReview] = useState([]);

  const [imglinkfinal, setimage] = React.useState();
  const [isImgLinkfinalSet,setIsImgLinkFinal] = React.useState(false);
  var imglink;

  const [keys,SetKeys]=useState([]);
  const [isKeysFetched,SetIsKeysFetched]= useState(false);

  const [variantKeys,SetVariantKeys] = useState([]);
  const [isVariantKeysFetched,SetIsVariantKeysFetched] = useState(false);
  const [change, setChange] = useState(0);
  const [isAddCompareClicked, setisAddCompareClicked] = useState(false);
  //const[productInformation,SetProductInformation] = useState();
  const[isProductInformationSet,SetIsProductInformationSet] = useState(false);
  var productInformation;
  var averagerate;
  useEffect(()=>{
    //var token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQGIuY2NjY2NjY2NqaGRoZGIiLCJleHAiOjE2NTQ0NDU2MzQsImlhdCI6MTY1NDM1OTIzNH0.fgpAQXcaaNruyanPxU2Xrkfe1AnsrUjf25boDfZhm8Q"
    var token = localStorage.getItem("jwtToken");
    if(localStorage.getItem("productSelected")!=null && !isImgLinkfinalSet && !isProductInformationSet && !isKeysFetched && !isVariantKeysFetched && !isPincodeFetched){

      axios({
        method:"get",
        url:"http://localhost:8080/pincodes"
      }).then(function(response){
        console.log("Pincode response: ",response);
        if(response.status==200) {
         
          response.data.map(index=>{
            // setPincode(p=>new Set([...Pincode,index.pincode]))
            Pincode.push(index.pincode)
          })
          console.log("Pincode Response: ",Pincode);
          // setPincode(response.data);
          setIsPincodeFetched(true);
          
          
         
        }
      }).catch(function(error){
        console.log("error",error);
      })

      axios({
        method:"get",
        url:"http://localhost:8080/get-products/"+localStorage.getItem("productSelected")
      }).then(function(response){
        console.log(response);
        if(response.status==200){
          console.log("response data",response.data);
          //product= response.data;
          setProduct(response.data);
          setIsProductFetched(true);
          imglink = product.productImage1;
          console.log("Product Detail",product);
          //setimage(imglink);
          //productImg1 = 'data:image/jpg;base64,'+ product.productImage1.data;
          //console.log("Product Image 1:",productImg1);
          setimage('data:image/jpg;base64,'+response.data.productImage1.data);
          console.log(response.data.productInformation);
          productInformation = response.data.productInformation;
          for(var k in response.data.productInformation){
            keys.push(k);
          }

          for(var k in response.data.variants){
            variantKeys.push(k);
          }
          
          console.log("keys",keys);
          //productInformation= response.data.productInformation;
          //getProductInformationKeys(productInformation)
          // ImgHandler('data:image/jpg;base64,' +product.productImage1.data);
          //setimage('data:image/jpg;base64,'+product.productImage1.data);
          setIsImgLinkFinal(true);
          SetIsProductInformationSet(true);
          SetIsKeysFetched(true);
          SetIsVariantKeysFetched(true);
        }
      }).catch(function(error){
        console.log("error",error);
        toast("Item already present in cart")
      })

      axios({
        method:"get",
        url:"http://localhost:8080/get-reviews/"+localStorage.getItem("productSelected")
      }).then(function(reviewresponse){
        console.log(reviewresponse);
        if(reviewresponse.status==200) {
          console.log("Review Response",reviewresponse.data);
          setReview(reviewresponse.data);
          setIsReviewFetched(true);
          
          
          console.log("Average rating: ",reviewresponse.data.averageRatings);
          averagerate = reviewresponse.data.averageRatings;
          console.log("Average ",averagerate);
        }
      }).catch(function(error){
        console.log("error",error);
      })


      
      
      

    }
  },[]);

  

  function getProductInformationKeys(productInformation){
    if(isProductInformationSet && !isKeysFetched){
      
    }
    
}



function callProductDetails(index){
  //alert(index);
  console.log("Index",index);
  localStorage.setItem("productSelected",index.modelNumber);
  console.log("Product Selected",localStorage.getItem("productSelected"))
  navigate("/productDetails")
}
 
  
  const notify=()=>{
    return(
      <Toast>
      <ToastHeader>
        Reactstrap
      </ToastHeader>
      <ToastBody>
        This is a toast on a primary background — check it out!
      </ToastBody>
    </Toast>
    );
  }
  
  
  const inputQuantityEvent = (event) => {
    flag = true;
    quantity = event.target.value;
    console.log(quantity);
  }
  const navigate = useNavigate();

  const handleAddToCart = () => {
    //toast.configure();  

    var form_data_body={
      modelNumber: product.modelNumber,
    }
    axios.post("http://localhost:8080/add-to-cart", form_data_body, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaHJhZGRoYW11bGF5QGdtYWlsLmNvbSIsImV4cCI6MTY1NTcyMjM2OSwiaWF0IjoxNjU1NjIyMzY5fQ.Ba-3LykZ5ysEfSc-22WQzwvM5WrSzqJoJ72JHb7XXokn"
      },
    }).then(function(response){
      console.log(response);
      if(response.status==200){
          console.log("response",response);
          console.log("Item added to cart successfully");
          //alert("Item added to cart ")

          if (flag == false) {
            alert("Add To Cart:1");
          } else if (quantity <= 0) {
            alert("Please enter a positive number");
          } else {
            alert("Quantity:" + quantity);
          }

          navigate("/cart")

          // localStorage.setItem("isLoggedIn",true);
          //navigate("/")
          
          //redux();
      }else{
          console.log("In else");
          alert("Item already present in cart")
          console.log(response.data.message);
          return;
      }  

      
      
  }).catch(function(error){
      console.log(error);
      alert("Item already present in cart")
      return;
  })




    
  }

  var cards=<div>
        <img className="logo_mahavir" src={require ('../../assets/images.jpg')} alt="God" />
    </div>



  const handleBuyNow = () => {

    if (flag == false) {
      alert("Add To Cart:1");
    } else if (quantity <= 0) {
      alert("Please enter a positive number");
    } else {
      alert("Quantity:" + quantity);
    }
    navigate("/AddressForm")
  }

  function fetchOfferAvailableBtn(offerPrice,productPrice){
    if(offerPrice===productPrice){
      return <Button variant="flat" size="m" style={{visibility:"hidden"}}>Offer Available</Button>
    }
    return <Button variant="flat" size="m">Offer Available</Button>
  }

  const handleAddToCompare = event => {
    if (event.target.checked) {

      console.log('✅ Checkbox is checked');
      
      setChange(change+1)
      
      
      
    } else {
      console.log('⛔️ Checkbox is NOT checked');
      setChange(change-1)
    }
    setisAddCompareClicked(current => !current);
    
    // alert("Added To Compare");
    
  }

  function ImgHandler(e) {
    imglink = { e };
    
    setimage(imglink.e);
    console.log("imglink.e",imglink.e);
    console.log("Img Final:", imglinkfinal);
    console.log("Image: ", imglink)
  }

  function handleBtnClick(variantName){
    // console.log("Variant Btn Clicked",variantName.index);
    axios({
        method:"get",
        url:"http://localhost:8080/get-products/"+localStorage.getItem("productSelected")+"/"+variantName.index
    }).then(function(response){
        if(response.status==200){
            console.log("response data",response.data);
            setProduct(response.data);
            setimage('data:image/jpg;base64,'+response.data.productImage1.data);
        }
    }).catch(function(error){
        console.log("error",error);
    })
    
}

var variantcolorone = "";
var variantcolortwo = "";
var variantcolorthree = "";
var variantcolorfour = "";
var variantcolorfive = "";
console.log("Percentage: ",(review.nosOfFiveStars/review.totalReviews)*100);
if((review.nosOfFiveStars/review.totalReviews)*100>=70) {
  variantcolorfive = "success";
} else if ((review.nosOfFiveStars/review.totalReviews)*100>=50 && (review.nosOfFiveStars/review.totalReviews)*100<70) {
  variantcolorfive = "info";
} else if ((review.nosOfFiveStars/review.totalReviews)*100>=20 && (review.nosOfFiveStars/review.totalReviews)*100<50) {
  variantcolorfive = "warning";
} else {
  variantcolorfive = "danger";
}

if((review.nosOfFourStars/review.totalReviews)*100>=70) {
  variantcolorfour = "success";
} else if ((review.nosOfFourStars/review.totalReviews)*100>=50 && (review.nosOfFourStars/review.totalReviews)*100<70) {
  variantcolorfour = "info";
} else if ((review.nosOfFourStars/review.totalReviews)*100>=20 && (review.nosOfFourStars/review.totalReviews)*100<50) {
  variantcolorfour = "warning";
} else {
  variantcolorfour = "danger";
}

if((review.nosOfThreeStars/review.totalReviews)*100>=70) {
  variantcolorthree = "success";
} else if ((review.nosOfThreeStars/review.totalReviews)*100>=50 && (review.nosOfThreeStars/review.totalReviews)*100<70) {
  variantcolorthree = "info";
} else if ((review.nosOfThreeStars/review.totalReviews)*100>=20 && (review.nosOfThreeStars/review.totalReviews)*100<50) {
  variantcolorthree = "warning";
} else {
  variantcolorthree = "danger";
}

if((review.nosOfTwoStars/review.totalReviews)*100>=70) {
  variantcolortwo = "success";
} else if ((review.nosOfTwoStars/review.totalReviews)*100>=50 && (review.nosOfTwoStars/review.totalReviews)*100<70) {
  variantcolortwo = "info";
} else if ((review.nosOfTwoStars/review.totalReviews)*100>=20 && (review.nosOfTwoStars/review.totalReviews)*100<50) {
  variantcolortwo = "warning";
} else {
  variantcolortwo = "danger";
}

if((review.nosOfOneStars/review.totalReviews)*100>=70) {
  variantcolorone = "success";
} else if ((review.nosOfOneStars/review.totalReviews)*100>=50 && (review.nosOfOneStars/review.totalReviews)*100<70) {
  variantcolorone = "info";
} else if ((review.nosOfOneStars/review.totalReviews)*100>=20 && (review.nosOfOneStars/review.totalReviews)*100<50) {
  variantcolorone = "warning";
} else {
  variantcolorone = "danger";
}




  return (
      
    (isProductFetched )?(
      <>
     {/* <Header/> */}
      <div className="container" style={{backgroudColor:'white'}}>
      <Row >
        <Col md={6}>
          <div >
          <Row >
            <Col md={2} >
              <img className="productdetailimg" src={'data:image/jpg;base64,' + product.productImage1.data} onClick={() => ImgHandler('data:image/jpg;base64,' +product.productImage1.data)}  style={{ width: "90px", height: "100px" }} />
              <img className="productdetailimg" src={'data:image/jpg;base64,' + product.productImage2.data} onClick={() => ImgHandler('data:image/jpg;base64,' +product.productImage2.data)} style={{ width: "90px", height: "100px", marginTop: "10px" }} />
              <img className="productdetailimg" src={'data:image/jpg;base64,' + product.productImage3.data} onClick={() => ImgHandler('data:image/jpg;base64,' +product.productImage3.data)} style={{ width: "90px", height: "100px", marginTop: "10px" }} />
              <img className="productdetailimg" src={'data:image/jpg;base64,' + product.productImage4.data} onClick={() => ImgHandler('data:image/jpg;base64,' +product.productImage4.data)} style={{ width: "90px", height: "100px", marginTop: "10px" }} />
              <img className="productdetailimg" src={'data:image/jpg;base64,' + product.productImage5.data} onClick={() => ImgHandler('data:image/jpg;base64,' +product.productImage5.data)} style={{ width: "90px", height: "100px", marginTop: "10px" }} />

            </Col>

            <Col className="imageproduct" md={4} style={{marginTop: "100px", justifyContent: "center", marginLeft:35}}>
              <br></br>
              <br></br>

              <div style={{ width: '400px', height: '513px' }}>
                {/* width:'400px',height:'513px'      */}
                
                
                <ReactImageMagnify {...{
                  smallImage: {
                    alt: 'Wristwatch by Ted Baker London',
                    isFluidWidth: true,
                    src:  imglinkfinal,
                    
                    
                  },
                  largeImage: {
                    src: imglinkfinal,
                    width: 800,
                    height: 800

                    // width: 1200, height: 1800
                  }
                }} />

              </div>
            </Col>
          </Row >
          </div>
     
        </Col>
        <Col md={6} style={{
    height: '600px',
    overflowY: 'scroll'}}>
        
          <br></br>
          <br></br>

          <h2 className="text" >{product.productName}</h2>
          
          <Row>
            <Col className="star" md={1} style={{textAlign:"right"}} >
            {Math.round(review.averageRatings*10)/10}<AiFillStar/>
            </Col>
            <Col md={4}>
              {review.totalRatings} Ratings & {review.totalReviews} Reviews
            </Col>
          </Row>
          
          <br></br>
          <Row>
            
            {
              (product.offerPrice==product.productPrice) ? (<Col md={4}>
                <h4>Price: <b>₹{product.productPrice}</b></h4>
                </Col>):(<Col md={8}>
            <h6>MSP: <b style={{marginRight:"20px",color:"rgb(255,98,98)"}}>₹{product.offerPrice}</b> MRP: <b style={{textDecorationLine:"line-through", textDecorationStyle:"solid"}}>₹{product.productPrice}</b></h6> 
            </Col>)
            }
            
          </Row>
          <br></br>

          <h5><b><i>Available Offers</i></b></h5>
          <Row>
          <Swiper
                slidesPerView={1}
                spaceBetween={5}
                slidesPerGroup={3}
                loop={false}
                loopFillGroupWithBlank={true}
                breakpoints={{
                    700: {
                        slidesPerView: 3,
                    },
                    400: {
                        slidesPerView: 3,
                    },
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            > 

            <SwiperSlide>
              <Card style={{ width: '25rem' }} className="mb-2">
                <Card.Body>
                  <Card.Title>
                    "IDBI BANK"
                  </Card.Title>
                  <Card.Text>
                  Flat Cashback upto Rs. 2,500 on ICICI Credit card 
                  EMI for cart value above Rs.50,000. Select the offer from “View all offers ”on payment page T&C Apply.
                  </Card.Text>
                  <Card.Text style={{textAlign:"left"}}>
                    View More
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card style={{ width: '25rem' }} className="mb-2">
                <Card.Body>
                  <Card.Title>
                    "ICICI BANK"
                  </Card.Title>
                  <Card.Text>
                  Flat Cashback upto Rs. 2,500 on ICICI Credit card 
                  EMI for cart value above Rs.50,000. Select the offer from “View all offers ”on payment page T&C Apply.
                  </Card.Text>
                  <Card.Text style={{textAlign:"left"}}>
                    View More
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card style={{ width: '25rem' }} className="mb-2">
                <Card.Body>
                  <Card.Title>
                    "AXIS BANK"
                  </Card.Title>
                  <Card.Text>
                  Flat Cashback upto Rs. 2,500 on ICICI Credit card 
                  EMI for cart value above Rs.50,000. Select the offer from “View all offers ”on payment page T&C Apply.
                  </Card.Text>
                  <Card.Text style={{textAlign:"left"}}>
                    View More
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card style={{ width: '25rem' }} className="mb-2">
                <Card.Body>
                  <Card.Title>
                    "SBI"
                  </Card.Title>
                  <Card.Text>
                  Flat Cashback upto Rs. 2,500 on ICICI Credit card 
                  EMI for cart value above Rs.50,000. Select the offer from “View all offers ”on payment page T&C Apply.
                  </Card.Text>
                  <Card.Text style={{textAlign:"left"}}>
                    View More
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>

            </Swiper>
          </Row>
          
          <br></br>
          <Row>
          <Col md={5}>  
          <h5><b><i>Product Highlights</i></b></h5>
          {
            product.productHighlights.split(';').map(index=>{
              return(
                <p>•<span> </span>{index}</p>
              );
              
            })
          }       
          {/* <h6>{product.productHighlights}</h6> */}
          </Col>
          {
            (product.freeItem) ? (
              <Col md={6}>
              <h5 style={{textAlign:"center",color:"rgb(255,98,98)"}}><b><i>Free Gift Worth {product.freeItem.price}</i></b></h5>
              <Row style={{marginTop:20}}>
              <Col md={5}>
              <img style={{width:120, height:120}} src={'data:image/jpg;base64,' + product.freeItem.image.data}></img>
              
              </Col>
              <Col md={6}>
                <h5>{product.freeItem.name}</h5>
              </Col>
              </Row>
              
            </Col>
            ) : (null)
          }
          
          </Row>
          <br></br>
          <QuantityPicker className="quantitypicker" style={{ background: "red" }} min={0} smooth onChange={inputQuantityEvent} />
          {/* <Input id="Quantity"
            name="Quantity"
            placeholder="Enter Quantity"
            type="number"
            min={0}
            onChange={inputQuantityEvent}
            style={{ width: 300 }}>
          </Input> */}
          <br></br>
          {/* <Button onClick={handleAddToCart}>Add To Cart</Button> */}
          <Button  variant="flat" size="1" onClick={handleAddToCart}>Add To Cart</Button>
          <Button variant="flat" size="1" style={{marginLeft:30}} onClick={handleBuyNow}>Buy Now</Button>

          <br></br>
          <br></br>
          
          
          <h3 style={{marginTop:30}}><b>Variants</b></h3>
          {/* {
            (isVariantKeysFetched)?(
              variantKeys.map(variant=>{
                return(
                  <ProductVariant variantName={variant} product={product}/>
                );
              })
            ):(
              null
            )
          } */}
          {
            (isVariantKeysFetched)?(
              variantKeys.map(variantName=>{
                return(
                  <Row style={{marginTop:15}}>
                    <Col md={2}>
                      <h5>{variantName}</h5>
                    </Col>
                    {
                      product.variants[variantName].map(index=>{
                        return(
                          <Col md={1} style={{marginRight:30}}>
                          <Button id={index}  variant="flat" style={{marginLeft:10}} onClick={()=>handleBtnClick({index})}>{index}</Button>
                          </Col>
                        );
                      })
                    }
                  </Row>
                )  
              })
            ):(
              null
            )
          }
          <br></br>

          <Row style={{marginTop:20}}>
            <Col md={3}>
            <h5 >Enter Pincode</h5>
            </Col>
            <Col md={4}>
              <Input type="number" style={{height:25}}></Input>
            </Col>
            <Col md={3}>
              <button style={{borderRadius:"5px", padding:3}}>Check Pincode</button>
            </Col>
          </Row>

          <h3 className="text" style={{ marginTop: "50px" }}>Product Description</h3>
          <hr></hr>

          <Row >
            <Col md={2}>

              <img src={'data:image/jpg;base64,'+product.productImage1.data }style={{ width: "130px" }}></img>

            </Col>
            <Col md={6}>

              <h5 style={{marginLeft:'50px'}} >{product.modelNumber}</h5>

              <p style={{marginLeft:'50px'}}>{product.productDescription}</p>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col md={6}>

              <h4>Take Your Photos </h4>
              <p>The iPhone 11 features dual 12 MP Ultra Wide (13mm) and Wide (26mm) cameras with 4K video recording up to 60 fps. The Ultra Wide camera provides 120° field of view, letting you capture four times more scene, and the Wide camera provides 100% Focus Pixels for up to three times faster autofocus in low light.</p>
            </Col>
            <Col md={2}>
              <img src={'data:image/jpg;base64,'+product.productImage1.data } style={{ width: "130px" }}></img>
            </Col>
          </Row>
          <br></br>
          <h3 className="text" style={{ marginTop: "10px" }}>Specifications</h3>
          <hr></hr>
          <Row>
         
          {
            (isKeysFetched)?(
              keys.map(k=>{
                return(
                  <ProductSpecification title={k} product={product}/> 
                );
              })
            
            ):(
              null
            )

          }
          
            {/* <h6>General</h6>

            <Row style={{ marginTop: "10px" }}>

              <Col md={2}>
                <p>In The Box</p>
              </Col>
              <Col md={6}>
                <p>Handset, EarPods with Lightning Connector, Lightning to USB Cable, USB Power Adapter, Documentation</p>
              </Col>
            </Row>

            <Row>
              <Col md={2}>
                <p>Model Number</p>
              </Col>
              <Col md={6}>
                <p>MWLT2HN/A</p>
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <p>Color</p>
              </Col>
              <Col md={6}>
                <p>Graphite</p>
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <p>SIM Type</p>
              </Col>
              <Col md={6}>
                <p>Dual Sim</p>
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <p>Model Name</p>
              </Col>
              <Col md={6}>
                <p>iPhone 13 Pro Max</p>
              </Col>
            </Row> */}
          </Row>
          <br></br>
          <h4 className="text">Ratings and Reviews</h4>
          <hr></hr>
          <Row>
            <Col md={1} style={{ display:"flex"}}>
              
              <h3>{Math.round(review.averageRatings*10)/10}</h3>
            </Col>
            <Col md={1} style={{ paddingLeft: "10px" , paddingTop:'5px'}}>
              <AiIcons.AiFillStar size={20}/>
            </Col>

            <Col md={1} style={{ paddingLeft: "5px" }}>
              <p >5⭐</p>
              <p >4⭐</p>
              <p >3⭐</p>
              <p >2⭐</p>
              <p>1⭐</p>
            </Col>


            <Col md={3}>

            <div>
            <ProgressBar style={{marginBottom:"2px"}}animated  striped variant={variantcolorfive} now={(review.nosOfFiveStars/review.totalReviews)*100} />
            <br></br>
            <ProgressBar style={{marginBottom:"2px"}}animated  striped variant={variantcolorfour} now={(review.nosOfFourStars/review.totalReviews)*100} />
            <br></br>
            <ProgressBar style={{marginBottom:"2px"}} animated striped variant={variantcolorthree} now={(review.nosOfThreeStars/review.totalReviews)*100} />
            <br></br>
            <ProgressBar style={{marginBottom:"2px"}} animated striped variant={variantcolortwo} now={(review.nosOfTwoStars/review.totalReviews)*100} />
            <br></br>
            <ProgressBar style={{marginBottom:"2px"}} animated striped variant={variantcolorone} now={(review.nosOfOneStars/review.totalReviews)*100} />
          </div>
            </Col>
            <Col md={1}>
              <p >{review.nosOfFiveStars}</p>
              <p >{review.nosOfFourStars}</p>
              <p >{review.nosOfThreeStars}</p>
              <p >{review.nosOfTwoStars}</p>
              <p>{review.nosOfOneStars}</p>
            </Col>
          </Row>
          <Row>
            <br></br>
            
            
            {
              (isReviewFetched)? (
                
                review.reviews.map((index)=>{
                  return (
                    <Row>
                    <Row>
                    <Col className="star" md={1} style={{textAlign:"right"}} >
                          
                          {index.rating}<AiFillStar/>
                  </Col>
                  <Col>
                      <p>{index.reviewer_name}</p>
                  </Col>
                  </Row>
                  <Row>
                  <Col style={{marginLeft:70}}>
                      <p>{index.review}</p>
                  </Col> 
              </Row>
              </Row>
                  ) 
                })
              ) : (null)
              
            }
            {/* <UserReviewRating/>
            <UserReviewRating />
            <UserReviewRating />
            <UserReviewRating /> */}
          </Row>
          <br></br>
          

        </Col>
      </Row>
     
        
    {/* </div> */}
    <h4 className="textsimilar" style={{marginLeft:"20px"}}>Similar Products</h4>
    
    {/* <Row>
         <Col>
        <Swiper
        slidesPerView={1}
        spaceBetween={5}
        slidesPerGroup={3}
        loop={false}
        loopFillGroupWithBlank={true}
        breakpoints={{
          700: {
            slidesPerView: 6,
          },
          400: {
            slidesPerView: 3,
          },
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
          cards = productList.map(index=>{
            return(
              <SwiperSlide>
              <Card  style={{ width: '25rem' }}
                  className="mb-2"
                   >
                    <Card.Img  className="this.props.img" variant="top" src={"data:image/png;base64," + index.productImage1} />
               
                    <Card.Body >
                    <Card.Title className="this.props.h6 change" as="h6"  >{index.productName}</Card.Title>
                    <Card.Text  className="this.props.p change">
                    {index.productDescription}
                    <br></br><b style={{fontWeight:"bolder",color:"rgb(255, 88, 88)", fontSize:20}}>Rs {index.productPrice}</b>
                    </Card.Text>
                                        
                    
                    <Form>
                      <Form.Check type="checkbox"  label = "Add To Compare" onChange={handleAddToCompare}/>
                    </Form>
                    
                      <br></br>
                      {
                        fetchOfferAvailableBtn(index.offerPrice,index.productPrice)
                      }                    
                    
                  </Card.Body>

                  
              </Card>


               
              </SwiperSlide>
            )
          })
        }
      </Swiper>

        </Col>
        </Row>  */}
        
        
        <Swiper
          slidesPerView={1}
          spaceBetween={5}
          slidesPerGroup={3}
          loop={false}
          loopFillGroupWithBlank={true}
          breakpoints={{
            700: {
              slidesPerView: 5,
            },
            400: {
              slidesPerView: 1,
            },
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        > {console.log("Product List",productList)}
          {
            cards = productList.map(index => {
              
              return (
                <SwiperSlide >
              <Card style={{ width: '13rem' }} className="mb-2">
                <CardImg className="this.props.img"
                  src={"data:image/png;base64," + index.productImage1}/>
                  <CardBody>
                    <CardTitle className="this.props.h6 change">
                      <h6><b>{index.productName}</b></h6>
                    </CardTitle>
                    <CardSubtitle>
                    <h6>Rs {index.productPrice}</h6>
                    </CardSubtitle>
                    <CardText className="this.props.p change">
                     <p>{index.productHighlights}</p>
                  </CardText>
                  <Form>
                      <Form.Check type="checkbox"  label = "Add To Compare" onChange={handleAddToCompare}/>
                    </Form>
                    
                      <br></br>
                      {
                        fetchOfferAvailableBtn(index.offerPrice,index.productPrice)
                      }                    
                    
                  </CardBody>
              </Card>
              </SwiperSlide>
              )
            })
          }
        </Swiper>

     

         
      
    </div>
    </>
    ):(null)
    
    

  );
  // <br></br>

  // </div>


}

export default ProductDetails;