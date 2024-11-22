import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// Dummy user roles data
const userRoles = [
  {
    name: "Superadmin",
    type: "DEFAULT",
    dateCreated: "Jan 1, 2023",
    status: "Active",
    roleUsers: "AvatarGroup1", // Placeholder for user data
  },
  {
    name: "Merchantadmin",
    type: "DEFAULT",
    dateCreated: "Feb 1, 2023",
    status: "Active",
    roleUsers: "AvatarGroup2",
  },
  {
    name: "supportadmin",
    type: "DEFAULT",
    dateCreated: "Feb 1, 2023",
    status: "Active",
    roleUsers: "AvatarGroup3",
  },
  {
    name: "sales personnel",
    type: "CUSTOM",
    dateCreated: "Mar 1, 2023",
    status: "Active",
    roleUsers: "AvatarGroup4",
  },
  {
    name: "Deputy sales personnel",
    type: "CUSTOM",
    dateCreated: "Apr 1, 2023",
    status: "Inactive",
    roleUsers: "AvatarGroup5",
  },
  {
    name: "Developeradmin",
    type: "SYSTEM-CUSTOM",
    dateCreated: "May 1, 2023",
    status: "Active",
    roleUsers: "AvatarGroup6",
  },
  {
    name: "Developer-basic",
    type: "SYSTEM-CUSTOM",
    dateCreated: "Jun 1, 2023",
    status: "Active",
    roleUsers: "AvatarGroup7",
  },
];

// API endpoint to get all user roles
app.get('/api/roles', (req: Request, res: Response): void => {
    try{
        if (userRoles.length ===0){
            res.status(404).json({message: "No roles found"})
        }
        res.json(userRoles)
    }catch (error){
        res.status(500).json({message:"Server error", error})
    }
  
});

// Error handling middleware for unknown routes
app.use((req: Request, res: Response): void => {
  res.status(404).json({ message: "Route not found" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
