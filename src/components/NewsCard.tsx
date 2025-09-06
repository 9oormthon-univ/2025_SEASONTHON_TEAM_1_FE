type Props = {
  title: string
  summary: string
}

const NewsCard = ({ title, summary }: Props) => {
  return (
    <article className="news-card">
      <div className="thumb" />
      <div className="content">
        <h4 className="news-title">{title}</h4>
        <p className="news-summary">{summary}</p>
        <a href="#" className="more">AI, 왜 외면받을까?</a>
      </div>
    </article>
  )
}

export default NewsCard


