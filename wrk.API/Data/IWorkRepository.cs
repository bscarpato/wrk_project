using System.Collections.Generic;
using System.Threading.Tasks;
using wrk.API.Models;

namespace wrk.API.Data
{
    public interface IWorkRepository
    {
        void Add<T>(T entity) where T: class;
        void Delete<T>(T entity) where T: class;
        Task<bool> SaveAll();
        Task<IEnumerable<User>> GetUsers();
        Task<User> GetUser(int id);
    }
}