// import { useJobs } from '@/context/JobContext';
// import Navbar from '@/components/Navbar';
// import JobCard from '@/components/JobCard';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { Input } from '@/components/ui/input';
// import { DollarSign, TrendingUp, Users, Target, Search, Filter } from 'lucide-react';

// const affiliatePrograms = [
//   {
//     id: '1',
//     title: 'Amazon Associates',
//     company: 'Amazon',
//     commission: '1-10%',
//     category: 'E-commerce',
//     description: 'Earn commissions by promoting Amazon products',
//     minPayout: '$10',
//     cookieDuration: '24 hours',
//     rating: 4.5,
//     requirements: ['Website/Blog', 'Valid traffic'],
//     difficulty: 'Beginner'
//   },
//   {
//     id: '2',
//     title: 'ClickBank Marketplace',
//     company: 'ClickBank',
//     commission: '10-75%',
//     category: 'Digital Products',
//     description: 'Promote digital products and earn high commissions',
//     minPayout: '$10',
//     cookieDuration: '60 days',
//     rating: 4.2,
//     requirements: ['Marketing experience', 'Social media presence'],
//     difficulty: 'Intermediate'
//   },
//   {
//     id: '3',
//     title: 'Shopify Affiliate Program',
//     company: 'Shopify',
//     commission: '$58-$2000',
//     category: 'SaaS',
//     description: 'Refer new merchants to Shopify',
//     minPayout: '$25',
//     cookieDuration: '30 days',
//     rating: 4.7,
//     requirements: ['Business audience', 'Content creation'],
//     difficulty: 'Intermediate'
//   },
//   {
//     id: '4',
//     title: 'HubSpot Affiliate',
//     company: 'HubSpot',
//     commission: '15-30%',
//     category: 'Marketing Tools',
//     description: 'Promote HubSpot\'s marketing and sales software',
//     minPayout: '$50',
//     cookieDuration: '90 days',
//     rating: 4.6,
//     requirements: ['Marketing knowledge', 'B2B audience'],
//     difficulty: 'Advanced'
//   },
//   {
//     id: '5',
//     title: 'Coursera Partners',
//     company: 'Coursera',
//     commission: '10-45%',
//     category: 'Education',
//     description: 'Earn by promoting online courses and specializations',
//     minPayout: '$20',
//     cookieDuration: '30 days',
//     rating: 4.4,
//     requirements: ['Educational content', 'Student audience'],
//     difficulty: 'Beginner'
//   }
// ];

// export const Affiliate=()=>{
//       const { jobs, getFilteredJobs } = useJobs();
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('all');
//     return (
//           <Card>
//               <CardContent className="pt-6">
//                 <div className="flex flex-col md:flex-row gap-4">
//                   <div className="flex-1">
//                     <div className="relative">
//                       <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//                       <Input
//                         placeholder="Search affiliate programs..."
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                         className="pl-10"
//                       />
//                     </div>
//                   </div>
//                   <div className="flex gap-2">
//                     {categories.map(category => (
//                       <Button
//                         key={category}
//                         variant={selectedCategory === category ? "default" : "outline"}
//                         size="sm"
//                         onClick={() => setSelectedCategory(category)}
//                         className="capitalize"
//                       >
//                         {category}
//                       </Button>
//                     ))}
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {filteredPrograms.map(program => (
//                 <Card key={program.id} className="hover:shadow-lg transition-shadow">
//                   <CardHeader>
//                     <div className="flex justify-between items-start">
//                       <div>
//                         <CardTitle className="text-lg">{program.title}</CardTitle>
//                         <CardDescription>{program.company}</CardDescription>
//                       </div>
//                       <Badge variant="outline">{program.category}</Badge>
//                     </div>
//                   </CardHeader>
//                   <CardContent className="space-y-4">
//                     <p className="text-sm text-gray-600">{program.description}</p>
                    
//                     <div className="grid grid-cols-2 gap-4 text-sm">
//                       <div>
//                         <span className="font-medium text-green-600">Commission:</span>
//                         <p>{program.commission}</p>
//                       </div>
//                       <div>
//                         <span className="font-medium">Min Payout:</span>
//                         <p>{program.minPayout}</p>
//                       </div>
//                       <div>
//                         <span className="font-medium">Cookie:</span>
//                         <p>{program.cookieDuration}</p>
//                       </div>
//                       <div>
//                         <span className="font-medium">Rating:</span>
//                         <p>⭐ {program.rating}/5</p>
//                       </div>
//                     </div>
                    
//                     <div>
//                       <div className="flex justify-between items-center mb-2">
//                         <span className="text-sm font-medium">Difficulty:</span>
//                         <Badge className={getDifficultyColor(program.difficulty)}>
//                           {program.difficulty}
//                         </Badge>
//                       </div>
                      
//                       <div className="text-xs text-gray-500">
//                         <span className="font-medium">Requirements:</span>
//                         <p>{program.requirements.join(', ')}</p>
//                       </div>
//                     </div>
                    
//                     <div className="flex gap-2">
//                       <Button className="flex-1">Join Program</Button>
//                       <Button variant="outline" size="sm">Learn More</Button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//     )
// }