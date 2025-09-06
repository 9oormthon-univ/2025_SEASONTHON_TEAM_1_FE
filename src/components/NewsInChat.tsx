
 
import type { RelatedNewsData } from '../data/relatedMockNewsData';
import type { NewsData } from '../data/subjectMockNewsData';

type Props = {
   news: NewsData | RelatedNewsData
 }

 
 
 const NewsInChat = ({ news }: Props) => {
   return (
     <article className="news-card">
       <div className="thumb" />
       <div className="content">
         <h4 className="news-title">{news.title}</h4>
         <p className="news-summary">{news.content}</p>
         <div className="news-meta">
           <a href={news.source} className="source">더보기</a >
         </div>
       </div>
     </article>
   )
 }
 
 export default NewsInChat
 
 
 