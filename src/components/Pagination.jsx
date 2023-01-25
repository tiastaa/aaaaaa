import classes from "./Pagination.module.scss";
const Pagination = (props) => {
  const CreatePages = () => {
    let pages = [];
    if (props.total_pages > 4) {
      if (
        props.current_page >= 4 &&
        props.total_pages - props.current_page >= 3
      ) {
        for (let i = props.current_page - 1; i <= props.current_page + 1; i++) {
          pages.push(i);
          if (i === props.total_pages) {
            break;
          }
        }
      } else {
        if (props.total_pages - props.current_page <= 3) {
          for (let i = props.current_page - 1; i <= props.total_pages; i++) {
            pages.push(i);
          }
        } else {
          for (let i = 1; i <= 4; i++) {
            pages.push(i);
            if (i === props.total_pages) {
              break;
            }
          }
        }
      }
    } else {
      for (let i = 1; i <= props.total_pages; i++) {
        pages.push(i);
      }
    }
    return pages;
  };
  let page = CreatePages();
  console.log(page);
  console.log(props.total_pages);
  console.log(props.current_page);

  return (
    <div className={classes.pagination}>
      <button
        onClick={() => props.changePage(props.current_page - 1)}
        key={props.current_page - 1}
        className={
          props.current_page === 1 ? classes.pointer_disable : classes.pointer
        }
      >
        ←
      </button>

      {props.current_page >= 4 ? (
        <>
          <button
            onClick={() => props.changePage(1)}
            key={1}
            className={classes.button}
          >
            1
          </button>
          <span className={classes.dots}>...</span>
        </>
      ) : (
        <></>
      )}
      {page.map((page) => (
        <button
          onClick={() => props.changePage(page)}
          key={page}
          className={
            page === props.current_page ? classes.button_active : classes.button
          }
        >
          {page}
        </button>
      ))}
      {props.total_pages - props.current_page >= 3 ? (
        <>
          <div className={classes.dots}>
            <span>...</span>
          </div>

          <button
            onClick={() => props.changePage(props.total_pages)}
            key={props.total_pages}
            className={classes.button}
          >
            {props.total_pages}
          </button>
        </>
      ) : (
        <></>
      )}

      <button
        onClick={() => props.changePage(props.current_page + 1)}
        key={props.current_page + 1}
        className={
          props.current_page === props.total_pages
            ? classes.pointer_disable
            : classes.pointer
        }
      >
        →
      </button>
    </div>
  );
};

export default Pagination;
